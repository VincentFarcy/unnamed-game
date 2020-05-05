<?php

namespace App\Controller;

use App\Entity\Backup;
use App\Entity\Hero;
use App\Repository\ChapterRepository;
use App\Repository\ContentParameterRepository;
use App\Repository\HeroRepository;
use App\Repository\GameParameterRepository;
use App\Repository\OpponentRepository;
use App\Repository\AttributeRepository;
use App\Repository\SequenceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/api/game/", name="api_game_")
 */
class GameController extends AbstractController
{
    /**
     * @Route("load", name="load", methods={"GET"})
     */
    public function load(
        AttributeRepository $attributeRepository,
        ChapterRepository $chapterRepository,
        ContentParameterRepository $contentParameterRepository,
        GameParameterRepository $gameParameterRepository,
        OpponentRepository $opponentRepository,
        SerializerInterface $serializer)
    {
        // Extract all the datas needed for starting the game from scratch :
        $chapters = $chapterRepository->findBy([], ['orderBy' => 'ASC']);
        $opponents = $opponentRepository->findAll();
        $attributes = $attributeRepository->findAll();
        $rawContentParameters = $contentParameterRepository->findAll();
        $rawGameParameters = $gameParameterRepository->findAll();
        // Reformating content parameters table
        $contentParameters = [];
        foreach($rawContentParameters as $rawContentParameter) {
            $contentParameters [$rawContentParameter->getLabel()] = $rawContentParameter->getValue();
        }
        // Reformating game parameters table        
        $gameParameters = [];
        foreach($rawGameParameters as $rawGameParameter) {
            $gameParameters [$rawGameParameter->getLabel()] = $rawGameParameter->getValue();
        }

        // Send to the front at json format after use of doctrine serializer groups :
        return $this->json([ 
            
            'chapters' => 
                $serializer->normalize(
                    $chapters,
                    null, ['groups' => ['chapter']]
                ),
            'attributes' => 
                $serializer->normalize(
                    $attributes,
                    null, ['groups' => ['attribute']]
                ),  
            'opponents' => 
                $serializer->normalize(
                    $opponents,
                    null, ['groups' => ['opponent']]
                ), 
            'contentParameters' => 
                $serializer->normalize(
                    $contentParameters,
                    null, ['groups' => ['content-parameter']]
                ), 
            'gameParameters' => 
                $serializer->normalize(
                    $gameParameters,
                    null, ['groups' => ['game-parameter']]
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
        SerializerInterface $serializer,
        ValidatorInterface $validator)
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

            // prepare hero before add in DB
            $newHero = new Hero();
            $newHero
                ->setUser($user)
                ->setName($hero["name"])
                ->setGender($hero["gender"]);

            // Catch constraints validation error in array $errorMessages
            $errors = $validator->validate($newHero);
            $errorMessages = [];
            if (count($errors) > 0) {
                foreach ($errors as $error){
                    $errorMessages[] = $error->getMessage();
                }
            }

            // Error encountered
            if (count($errorMessages) > 0) {
                // error 400
                return $this->json(
                    [
                    "errorMessages" => $errorMessages,
                    "data" => $data
                    ],
                    JsonResponse::HTTP_BAD_REQUEST
                );
            }

            // Hero data ok
            $em->persist($newHero);
            $hero = $newHero;
        }

        // temp : delete all backups of the hero before adding a new one
        foreach ($hero->getBackups() as $iBackup){
            $em->remove($iBackup);
        }

        // Prepare backup before add in DB
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

        // Catch constraints validation error in array $errorMessages
        $errors = $validator->validate($backup);
        $errorMessages = [];
        if (count($errors) > 0) {
            foreach ($errors as $error){
                $errorMessages[] = $error->getMessage();
            }
        }

        // Error encountered
        if (count($errorMessages) > 0) {
            // error 400
            return $this->json(
                [
                   "errorMessages" => $errorMessages,
                   "data" => $data
                ],
                JsonResponse::HTTP_BAD_REQUEST
           );
        }

        //Add in DB
        $em->persist($backup);
        $em->flush();

        // Success message and send the hero and all the backups of the user
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
            ],
            JsonResponse::HTTP_CREATED
        );
    }
}
