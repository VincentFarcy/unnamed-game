<?php

namespace App\Repository;

use App\Entity\RandomEvent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RandomEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method RandomEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method RandomEvent[]    findAll()
 * @method RandomEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RandomEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RandomEvent::class);
    }

    // /**
    //  * @return RandomEvent[] Returns an array of RandomEvent objects
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
    public function findOneBySomeField($value): ?RandomEvent
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
