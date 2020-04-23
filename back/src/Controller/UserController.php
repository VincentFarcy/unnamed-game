<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\BackupRepository;;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/api/user/", name="api_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("read", name="read", methods={"GET"})
     */
    public function read(
        BackupRepository $backupRepository,
        SerializerInterface $serializer)
    {
        // Get connected user
        $user = $this->GetUser();
        // Get Heroes
        $heroes = $user->getHeroes();
        // Get 1st hero and his backups
        $backups = [];
        if (count($heroes) > 0) {
            $hero = $heroes[0];
            $user = $this->GetUser();
            $backups = $backupRepository->findBy(['hero' => $hero->getId()], ['createdAt' => 'DESC']);
        }
        // Send data
        return $this->json([
            'user' => 
                $serializer->normalize(
                    $user,
                    null, ['groups' => ['user']]
                ), 
            'backups' => 
                $serializer->normalize(
                    $backups,
                    null, ['groups' => ['backup']]
            ), 
        ]);
    }

    /**
     * @Route("edit", name="edit", methods={"PUT"})
     */
    public function edit(
        Request $request,
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        ValidatorInterface $validator,
        JWTTokenManagerInterface $JWTManager)
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
        if (    !isset($email)
            ||  !isset($pseudo)) {
            // error 400
            return $this->json(
                [
                   "message" => "Edit user error : missing data",
                ],
                JsonResponse::HTTP_BAD_REQUEST
           );
        }

        // Prepare user before edit
        $user->setPseudo($pseudo);
        $user->setEmail($email);
        $user->setUpdatedAt(new \DateTime());

        // Catch constraints validation error in array $errorMessages
        $errors = $validator->validate($user);
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

        // Update user data in DB
        $em->flush();

        // Send new user data
        return $this->json(
            [
                'user' => 
                    $serializer->normalize(
                        $user,
                        null, ['groups' => ['user']]
                    ), 
                'token' => $JWTManager->create($user)
            ]
        );
    }

    /**
     * @Route("add", name="add", methods={"POST"})
     */
    public function add(
        Request $request,
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        UserPasswordEncoderInterface $passwordEncoder,
        ValidatorInterface $validator,
        JWTTokenManagerInterface $JWTManager
        )
    {
        // Get data from client request
        $content = $request->getContent();
        // json to array
        $data = json_decode($content, true);
        // extract array into distinct variables
        extract($data);

        // check required data
        if (    !isset($email)
            ||  !isset($pseudo)
            ||  !isset($password)
            ||  !isset($ageChecked)
        ) {
            // error 400
            return $this->json(
                 [
                    "message" => "Add user error : missing data",
                    "data" => $data
                ],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        // Create a new user ()
        $user = new User();

        // Prepare user data for validation in DB with encoded password
        $user
            ->setEmail($email)
            ->setPseudo($pseudo)
            ->setAgeChecked($ageChecked);

        // Catch constraints validation error in array $errorMessages
        $errors = $validator->validate($user);
        $errorMessages = [];
        if (count($errors) > 0) {
            foreach ($errors as $error){
                $errorMessages[] = $error->getMessage();
            }
        }

        // check not encoded password
        if (!preg_match("/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/", $password)) {
            $passwordErrorMessage = "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, ";
            $passwordErrorMessage.= "un caractère spécial, et faire au moins 8 caractères."; 
            $errorMessages[] = $passwordErrorMessage;
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
        // Add user data in DB with encoded password
        $encodedPassword = $passwordEncoder->encodePassword($user, $password);
        $user
            ->setRoles(["ROLE_USER"])
            ->setPassword($encodedPassword);

        $em->persist($user);
        $em->flush();


        // Send new user data
        return $this->json(
            [
                'user' => 
                    $serializer->normalize(
                        $user,
                        null, ['groups' => ['user']]
                    ), 
                'token' => $JWTManager->create($user)
            ],
            JsonResponse::HTTP_CREATED
        );
    }

    /**
     * @Route("delete", name="delete", methods={"DELETE"})
     */
    public function delete(
        EntityManagerInterface $em)
    {
        // Get connected user
        $user = $this->GetUser();

        // Remove User
        $em->remove($user);
        $em->flush();

        // Send Message
        return $this->json(
            [
               "message" => "User deleted",
            ]
        );
    }
}
