<?php

namespace App\Repository;

use App\Entity\RandomReward;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RandomReward|null find($id, $lockMode = null, $lockVersion = null)
 * @method RandomReward|null findOneBy(array $criteria, array $orderBy = null)
 * @method RandomReward[]    findAll()
 * @method RandomReward[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RandomRewardRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RandomReward::class);
    }

    // /**
    //  * @return RandomReward[] Returns an array of RandomReward objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RandomReward
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
