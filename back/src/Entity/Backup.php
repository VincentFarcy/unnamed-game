<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BackupRepository")
 */
class Backup
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Sequence", inversedBy="backups")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("backup")
     */
    private $sequence;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Hero", inversedBy="backups")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("backup")
     */
    private $hero;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("backup")
     * @Assert\Length(
     *      min = 3,
     *      max = 100,
     *      minMessage = "Le nom de la sauvegarde doit faire au moins {{ limit }} caractères",
     *      maxMessage = "Le nom de la sauvegarde doit faire au plus {{ limit }} caractères",
     *      allowEmptyString = false
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups("backup")
     */
    private $score;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $strength;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $agility;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $constitution;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $will;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $intelligence;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $health;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $xp;

    /**
     * @ORM\Column(type="integer")
     * @Groups("backup")
     */
    private $money;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("backup")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    public function __toString()
    {
        return $this->getName();
    }

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSequence(): ?Sequence
    {
        return $this->sequence;
    }

    public function setSequence(?Sequence $sequence): self
    {
        $this->sequence = $sequence;

        return $this;
    }

    public function getHero(): ?Hero
    {
        return $this->hero;
    }

    public function setHero(?Hero $hero): self
    {
        $this->hero = $hero;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(?int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getStrength(): ?int
    {
        return $this->strength;
    }

    public function setStrength(int $strength): self
    {
        $this->strength = $strength;

        return $this;
    }

    public function getAgility(): ?int
    {
        return $this->agility;
    }

    public function setAgility(int $agility): self
    {
        $this->agility = $agility;

        return $this;
    }

    public function getConstitution(): ?int
    {
        return $this->constitution;
    }

    public function setConstitution(int $constitution): self
    {
        $this->constitution = $constitution;

        return $this;
    }

    public function getWill(): ?int
    {
        return $this->will;
    }

    public function setWill(int $will): self
    {
        $this->will = $will;

        return $this;
    }

    public function getIntelligence(): ?int
    {
        return $this->intelligence;
    }

    public function setIntelligence(int $intelligence): self
    {
        $this->intelligence = $intelligence;

        return $this;
    }

    public function getHealth(): ?int
    {
        return $this->health;
    }

    public function setHealth(int $health): self
    {
        $this->health = $health;

        return $this;
    }

    public function getXp(): ?int
    {
        return $this->xp;
    }

    public function setXp(int $xp): self
    {
        $this->xp = $xp;

        return $this;
    }

    public function getMoney(): ?int
    {
        return $this->money;
    }

    public function setMoney(int $money): self
    {
        $this->money = $money;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
