<?php

namespace App\Repository;

use App\Entity\RandomFightContest;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RandomFightContest|null find($id, $lockMode = null, $lockVersion = null)
 * @method RandomFightContest|null findOneBy(array $criteria, array $orderBy = null)
 * @method RandomFightContest[]    findAll()
 * @method RandomFightContest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RandomFightContestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RandomFightContest::class);
    }

    // /**
    //  * @return RandomFightContest[] Returns an array of RandomFightContest objects
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
    public function findOneBySomeField($value): ?RandomFightContest
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
