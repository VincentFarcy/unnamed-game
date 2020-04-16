<?php

namespace App\Controller\Admin;

use App\Entity\Chapter;
use App\Repository\ChapterRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/chapter", name="admin_chapter_")
 */
class ChapterController extends AbstractController
{
    /**
     * @Route("/", name="browse")
     */
    public function browse(ChapterRepository $chapterRepository)
    {
        return $this->render('admin/chapter/browse.html.twig', [
            'chapters' => $chapterRepository->findAll()
        ]);
    }

      /**
     * @Route("/{id}", name="read", requirements={"id": "\d+"})
     */
    public function read(Chapter $chapter)
    {
        return $this->render('admin/chapter/read.html.twig', [
            'chapter ' => $chapter,
        ]);
    }

      /**
     * @Route("/edit/{id}", name="edit", requirements={"id": "\d+"}))
     */
    public function edit()
    {
        return $this->render('admin/chapter/index.html.twig', [
            'controller_name' => 'ChapterController',
        ]);
    }

      /**
     * @Route("/add", name="add")
     */
    public function add()
    {
        return $this->render('admin/chapter/index.html.twig', [
            'controller_name' => 'ChapterController',
        ]);
    }

      /**
     * @Route("/delete/{id}", name="delete", requirements={"id": "\d+"}))
     */
    public function delete()
    {
        return $this->render('admin/chapter/index.html.twig', [
            'controller_name' => 'ChapterController',
        ]);
    }
    
}
