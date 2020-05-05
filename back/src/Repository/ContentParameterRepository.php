<?php

namespace App\Repository;

use App\Entity\ContentParameter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ContentParameter|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContentParameter|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContentParameter[]    findAll()
 * @method ContentParameter[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContentParameterRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContentParameter::class);
    }

    // /**
    //  * @return ContentParameter[] Returns an array of ContentParameter objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ContentParameter
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
