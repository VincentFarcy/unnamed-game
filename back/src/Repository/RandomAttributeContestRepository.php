<?php

namespace App\Repository;

use App\Entity\RandomAttributeContest;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RandomAttributeContest|null find($id, $lockMode = null, $lockVersion = null)
 * @method RandomAttributeContest|null findOneBy(array $criteria, array $orderBy = null)
 * @method RandomAttributeContest[]    findAll()
 * @method RandomAttributeContest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RandomAttributeContestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RandomAttributeContest::class);
    }

    // /**
    //  * @return RandomAttributeContest[] Returns an array of RandomAttributeContest objects
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
    public function findOneBySomeField($value): ?RandomAttributeContest
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
