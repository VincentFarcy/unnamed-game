<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/browse", name="api_browse")
     */
    public function browse(UserRepository $userRepository)
    {
        return $this->json($userRepository->findAll());
    }
}
