<?php

namespace App\Controller;

use App\Entity\Backup;
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
<<<<<<< HEAD
        $backups = [];
=======
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
        if ($user) {
            $backups = $backupRepository->findByUser($user->getId());
        }

        // Send to the front at json format after use of doctrine serializer groups :
        return $this->json([
            'user' => 
                $serializer->normalize(
                    $user,
                    null, ['groups' => ['user']]
<<<<<<< HEAD
                ), 
=======
                    ), 
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
            'chapters' => 
                $serializer->normalize(
                    $chapters,
                    null, ['groups' => ['chapter']]
<<<<<<< HEAD
                ), 
=======
                    ), 
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
            'opponents' => 
                $serializer->normalize(
                    $opponents,
                    null, ['groups' => ['opponent']]
<<<<<<< HEAD
                ), 
=======
                    ), 
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
            'content-parameters' => 
                $serializer->normalize(
                    $contentParameters,
                    null, ['groups' => ['content-parameter']]
<<<<<<< HEAD
                ), 
=======
                    ), 
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
            'game-parameters' => 
                $serializer->normalize(
                    $gameParameters,
                    null, ['groups' => ['game-parameter']]
<<<<<<< HEAD
                ), 
=======
                    ), 
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
            'backups' => 
                $serializer->normalize(
                    $backups,
                    null, ['groups' => ['backup']]
<<<<<<< HEAD
                ), 
=======
                    ), 
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
        ]);
    }

    /**
<<<<<<< HEAD
     * @Route("backup", name="backup", methods={"POST"})
=======
     * @Route("backup", name="backup", methods={"PUT"})
>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
     */
    public function backup(
        Request $request,
        HeroRepository $heroRepository,
        SequenceRepository $sequenceRepository,
        EntityManagerInterface $em)
    {
        // Get data from client request
        $content = $request->getContent();
        // json to array
        $data = json_decode($content, true);
        // extract array into distinct variables
        extract($data);

        // check of required data
        if (    !isset($sequenceId)
            ||  !isset($heroId)
            ||  !isset($name)
            ||  !isset($strength)
            ||  !isset($agility)
            ||  !isset($constitution)
            ||  !isset($will)
            ||  !isset($intelligence)
            ||  !isset($health)
            ||  !isset($xp)
            ||  !isset($money)
        ) {

            // error 400
            return $this->json(
                 [
                    "message" => "backup error : incomplete data",
                    "data" => $data
                ],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // check sequence object
        $sequence = $sequenceRepository->find($sequenceId);
        if (!isset($sequence)) {

            // error 400
            return $this->json(
                [
                   "message" => "backup error : sequence " . $sequenceId . " unknown",
                   "data" => $data
               ],
               JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // check hero object
        $hero = $heroRepository->find($heroId);
        if (!isset($hero)) {

            // error 400
            return $this->json(
                [
                   "message" => "backup error : hero " . $heroId . " unknown",
                   "data" => $data
               ],
               JsonResponse::HTTP_BAD_REQUEST
            );
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
            ->setXp($xp)
            ->setMoney($money);
        $em->persist($backup);
        $em->flush();

        // Success message
        return $this->json(
            ["message" => "backup ok"]
        );
<<<<<<< HEAD
=======

>>>>>>> 53c6f56492b898ce292c659cbf25fc6fe627f8d2
    }
}
