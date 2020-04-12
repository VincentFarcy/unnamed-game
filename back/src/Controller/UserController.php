<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/user/", name="api_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("read", name="read", methods={"GET"})
     */
    public function read(
        SerializerInterface $serializer)
    {
        // Get connected user
        $user = $this->GetUser();
        // Send data
        return $this->json([
            'user' => 
                $serializer->normalize(
                    $user,
                    null, ['groups' => ['user']]
                ), 
        ]);
    }

    /**
     * @Route("edit", name="edit", methods={"PUT"})
     */
    public function edit(
        Request $request,
        EntityManagerInterface $em,
        SerializerInterface $serializer)
    {
        // Get data from client request
        $content = $request->getContent();
        // json to array
        $data = json_decode($content, true);
        // extract array into distinct variables
        extract($data);

        // Get connected user
        $user = $this->GetUser();

        // Check sended data
        if (!isset($pseudo)) {
            // error 400
            return $this->json(
                [
                   "message" => "Edit user error : no data received",
               ],
               JsonResponse::HTTP_BAD_REQUEST
           );
        }

        // Update user data in DB for sent data
        if (isset($pseudo)) {
            $user->setPseudo($pseudo);
        }
        $user->setUpdatedAt(new \DateTime());
        $em->flush();

        // Send new user data
        return $this->json([
            'user' => 
                $serializer->normalize(
                    $user,
                    null, ['groups' => ['user']]
                ), 
        ]);
    }

    /**
     * @Route("add", name="add", methods={"POST"})
     */
    public function add(
        Request $request,
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        UserPasswordEncoderInterface $passwordEncoder)
    {
        // Get data from client request
        $content = $request->getContent();
        // json to array
        $data = json_decode($content, true);
        // extract array into distinct variables
        extract($data);

        // check of required data
        if (    !isset($email)
            ||  !isset($pseudo)
            ||  !isset($password)
            ||  !isset($ageChecked)
        ) {
            // error 400
            return $this->json(
                 [
                    "message" => "add user error : missing data",
                    "data" => $data
                ],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // check age confirmation
        if (!$ageChecked) {
            // error 400
            return $this->json(
                 [
                    "message" => "add user error : age confirmation missing",
                    "data" => $data
                ],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // Create a new user ()
        $user = new User();

        // Add user data in DB with encoded password
        $encodedPassword = $passwordEncoder->encodePassword($user, $password);
        $user
            ->setEmail($email)
            ->setPseudo($pseudo)
            ->setRoles(["ROLE_USER"])
            ->setPassword($encodedPassword)
            ->setAgeChecked($ageChecked);
        $em->persist($user);
        $em->flush();

        // Send new user data
        return $this->json([
            'user' => 
                $serializer->normalize(
                    $user,
                    null, ['groups' => ['user']]
                ), 
        ]);
    }

    /**
     * @Route("delete", name="delete", methods={"DELETE"})
     */
    public function delete(
        EntityManagerInterface $em)
    {
        $user = $this->GetUser();

        $em->remove($user);
        $em->flush();

        return $this->json(
            [
               "message" => "User deleted",
            ]
        );

        return $this->redirectToRoute('admin_person_index');
    }
}
