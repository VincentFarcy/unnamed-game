<?php

namespace App\Controller;

use App\Repository\BackupRepository;
use App\Repository\ChapterRepository;
use App\Repository\ContentParameterRepository;
use App\Repository\GameParameterRepository;
use App\Repository\OpponentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/", name="api_")
 */
class ApiController extends AbstractController
{
    /**
     * @Route("browse", name="browse")
     */
    public function browse(
        ChapterRepository $chapterRepository,
        OpponentRepository $opponentRepository,
        ContentParameterRepository $contentParameterRepository,
        GameParameterRepository $gameParameterRepository,
        BackupRepository $backupRepository,
        SerializerInterface $serializer)
    {

        // Extract all the datas needed for starting the game from scratch 
        // or from a backup of the connected user

        $chapters = $chapterRepository->findAll();
        $opponents = $opponentRepository->findAll();
        $contentParameters = $contentParameterRepository->findAll();
        $gameParameters = $gameParameterRepository->findAll();
        $backups = $backupRepository->findAll();

        // Send to the front at json format after use of doctrine serializer groups

        return $this->json([
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
}
