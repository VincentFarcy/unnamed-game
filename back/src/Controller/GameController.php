<?php

namespace App\Controller;

use App\Entity\Backup;
use App\Entity\Hero;
use App\Repository\BackupRepository;
use App\Repository\ChapterRepository;
use App\Repository\ContentParameterRepository;
use App\Repository\HeroRepository;
use App\Repository\GameParameterRepository;
use App\Repository\OpponentRepository;
use App\Repository\SequenceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/game/", name="api_game_")
 */
class GameController extends AbstractController
{
    /**
     * @Route("load", name="load", methods={"GET"})
     */
    public function load(
        ChapterRepository $chapterRepository,
        OpponentRepository $opponentRepository,
        ContentParameterRepository $contentParameterRepository,
        GameParameterRepository $gameParameterRepository,
        BackupRepository $backupRepository,
        SerializerInterface $serializer)
    {
        // Extract all the datas needed for starting the game from scratch :
        $chapters = $chapterRepository->findBy([], ['orderBy' => 'ASC']);
        $opponents = $opponentRepository->findAll();
        $contentParameters = $contentParameterRepository->findAll();
        $gameParameters = $gameParameterRepository->findAll();

        // or from a backup of the connected user :
        $user = $this->GetUser();
        $backups = [];
        if ($user) {
            $backups = $backupRepository->findByUser($user->getId());
        }

        // Send to the front at json format after use of doctrine serializer groups :
        return $this->json([
            'user' => 
                $serializer->normalize(
                    $user,
                    null, ['groups' => ['user']]
                ), 
            'chapters' => 
                $serializer->normalize(
                    $chapters,
                    null, ['groups' => ['chapter']]
                ), 
            'opponents' => 
                $serializer->normalize(
                    $opponents,
                    null, ['groups' => ['opponent']]
                ), 
            'content-parameters' => 
                $serializer->normalize(
                    $contentParameters,
                    null, ['groups' => ['content-parameter']]
                ), 
            'game-parameters' => 
                $serializer->normalize(
                    $gameParameters,
                    null, ['groups' => ['game-parameter']]
                ), 
            'backups' => 
                $serializer->normalize(
                    $backups,
                    null, ['groups' => ['backup']]
                ), 
        ]);
    }

    /**
     * @Route("backup", name="backup", methods={"POST"})
     */
    public function backup(
        Request $request,
        HeroRepository $heroRepository,
        SequenceRepository $sequenceRepository,
        EntityManagerInterface $em,
        SerializerInterface $serializer)
    {
        // Connected User
        $user = $this->GetUser();

        // Array of existing heroes for the connected user
        $userHeroes = $user->getHeroes()->toArray();

        // Get data from client request
        $content = $request->getContent();
        // json to array
        $data = json_decode($content, true);
        // extract array into distinct variables
        extract($data);

        //init error message
        $requestErrorMessage = "";

        // check of required data
        if (    !isset($sequenceId)
            ||  !isset($hero)
            ||  !isset($hero["name"])
            ||  !isset($hero["gender"])
            ||  !isset($name)
            ||  !isset($strength)
            ||  !isset($agility)
            ||  !isset($constitution)
            ||  !isset($will)
            ||  !isset($intelligence)
            ||  !isset($health)
            ||  !isset($money)
            ||  !isset($xp)
        ) {
            // error 400
            return $this->json([
                   "message" => "backup error : missing data",
                   "data" => $data],
               JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // check sequence object
        $sequence = $sequenceRepository->find($sequenceId);
        if (!isset($sequence)) {

            // error 400
            return $this->json([
                    "message" => "backup error : sequence " . $sequenceId . " unknown",
                    "data" => $data],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // check backup name format
        if (strlen($name) < 3 || strlen($name) > 100) {

            // error 400
            return $this->json([
                    "message" => "backup error : nom de la sauvegarde invalide",
                    "data" => $data],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // If hero has an id : check with existing ones in DB
        if (isset($hero["id"])) {

            // Instance of sent hero
            $hero = $heroRepository->find($hero["id"]);

            // Hero not found
            if (    count($userHeroes) == 0 
                ||  !in_array($hero, $userHeroes)) {
                // error 400
                return $this->json([
                        "message" => "backup error : hero non trouvé, sauvegarde impossible",
                        "data" => $data],
                    JsonResponse::HTTP_BAD_REQUEST
                );     
            }       

        // If no hero has been sent : create new hero
        } else {

            // error : existing hero but not sent
            if (count($userHeroes) > 0) {
                // error 400
                return $this->json([
                        "message" => "backup error : héro non transmis, sauvegarde impossible",
                        "data" => $data],
                    JsonResponse::HTTP_BAD_REQUEST
                );   
            }  

            // check hero data format
            if (strlen($hero["name"]) < 3 || strlen($hero["name"]) > 20) {
                
                // error 400
                return $this->json([
                        "message" => "backup error : nom du héro invalide",
                        "data" => $data],
                    JsonResponse::HTTP_BAD_REQUEST
                );
            }
            if (!in_array($hero["gender"], ["m", "f"]))  {

                // error 400
                return $this->json([
                        "message" => "backup error : genre du héro invalide",
                        "data" => $data],
                    JsonResponse::HTTP_BAD_REQUEST
                );
            }

            // add hero in DB
            $newHero = new Hero();
            $newHero
                ->setUser($user)
                ->setName($hero["name"])
                ->setGender($hero["gender"]);
            $em->persist($newHero);

            // prepare hero for add backup in DB
            $hero = $newHero;
        }

        // Create backup in DB
        $backup = new Backup();
        $backup
            ->setSequence($sequence)
            ->setHero($hero)
            ->setName($name)
            ->setStrength($strength)
            ->setAgility($agility)
            ->setConstitution($constitution)
            ->setWill($will)
            ->setIntelligence($intelligence)
            ->setHealth($health)
            ->setMoney($money)
            ->setXp($xp);
        // Not required data
        if (isset($score)) {
            $backup->setScore($score);
        }
        $em->persist($backup);
        $em->flush();

        // Success message and send all the backups of the user
        $em->refresh($hero);
        return $this->json(
            [
                'message' => 'backup ok',
                'hero' => 
                    $serializer->normalize(
                        $hero,
                        null, ['groups' => ['backup']]
                    ), 
                'backups' => 
                    $serializer->normalize(
                        $hero->getBackups(),
                        null, ['groups' => ['backup']]
                    ), 
            ]
        );
    }
}
