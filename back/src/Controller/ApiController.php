<?php

namespace App\Controller;

use App\Entity\Chapter;
use App\Repository\ChapterRepository;
use App\Repository\ContentParameterRepository;
use App\Repository\GameParameterRepository;
use App\Repository\OpponentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/browse", name="api_browse")
     */
    public function browse(
        ChapterRepository $chapterRepository,
        OpponentRepository $opponentRepository,
        ContentParameterRepository $contentParameterRepository,
        GameParameterRepository $gameParameterRepository,
        SerializerInterface $serializer)
    {

        $chapters = $chapterRepository->findAll();
        $opponents = $opponentRepository->findAll();
        $contentParameters = $contentParameterRepository->findAll();
        $gameParameters = $gameParameterRepository->findAll();

        return $this->json([
            'chapter' => 
                $serializer->normalize(
                    $chapters,
                    null, ['groups' => ['chapter']]
                    ), 
            'opponent' => 
                $serializer->normalize(
                    $opponents,
                    null, ['groups' => ['opponent']]
                    ), 
            'content-parameter' => 
                $serializer->normalize(
                    $contentParameters,
                    null, ['groups' => ['content-parameter']]
                    ), 
            'game-parameter' => 
                $serializer->normalize(
                    $gameParameters,
                    null, ['groups' => ['game-parameter']]
                    ), 
        ]);
    }
}
