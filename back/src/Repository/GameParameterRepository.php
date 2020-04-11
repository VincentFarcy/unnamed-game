<?php

namespace App\Repository;

use App\Entity\GameParameter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GameParameter|null find($id, $lockMode = null, $lockVersion = null)
 * @method GameParameter|null findOneBy(array $criteria, array $orderBy = null)
 * @method GameParameter[]    findAll()
 * @method GameParameter[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameParameterRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameParameter::class);
    }

    // /**
    //  * @return GameParameter[] Returns an array of GameParameter objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GameParameter
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
