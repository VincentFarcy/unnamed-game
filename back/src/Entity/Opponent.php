<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OpponentRepository")
 */
class Opponent
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"chapter", "opponent"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("opponent")
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $speed = 0;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $touch = 0;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $dodge = 0;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $armor = 0;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $health;

    /**
     * @ORM\Column(type="integer")
     */
    private $damageNbRoll;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $damageMin;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $damageMax;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $xpGain = 0;

    /**
     * @ORM\Column(type="integer")
     * @Groups("opponent")
     */
    private $moneyGain = 0;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("opponent")
     */
    private $image;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\RandomFightContest", mappedBy="opponent", orphanRemoval=true)
     */
    private $randomFightContests;

    public function __toString()
    {
        return $this->getName();
    }

    public function __construct()
    {
        $this->randomFightContests = new ArrayCollection();
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getSpeed(): ?int
    {
        return $this->speed;
    }

    public function setSpeed(int $speed): self
    {
        $this->speed = $speed;

        return $this;
    }

    public function getTouch(): ?int
    {
        return $this->touch;
    }

    public function setTouch(int $touch): self
    {
        $this->touch = $touch;

        return $this;
    }

    public function getDodge(): ?int
    {
        return $this->dodge;
    }

    public function setDodge(int $dodge): self
    {
        $this->dodge = $dodge;

        return $this;
    }

    public function getArmor(): ?int
    {
        return $this->armor;
    }

    public function setArmor(int $armor): self
    {
        $this->armor = $armor;

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

    public function getDamageNbRoll(): ?int
    {
        return $this->damageNbRoll;
    }

    public function setDamageNbRoll(int $damageNbRoll): self
    {
        $this->damageNbRoll = $damageNbRoll;

        return $this;
    }

    public function getDamageMin(): ?int
    {
        return $this->damageMin;
    }

    public function setDamageMin(int $damageMin): self
    {
        $this->damageMin = $damageMin;

        return $this;
    }

    public function getDamageMax(): ?int
    {
        return $this->damageMax;
    }

    public function setDamageMax(int $damageMax): self
    {
        $this->damageMax = $damageMax;

        return $this;
    }

    public function getXpGain(): ?int
    {
        return $this->xpGain;
    }

    public function setXpGain(int $xpGain): self
    {
        $this->xpGain = $xpGain;

        return $this;
    }

    public function getMoneyGain(): ?int
    {
        return $this->moneyGain;
    }

    public function setMoneyGain(int $moneyGain): self
    {
        $this->moneyGain = $moneyGain;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

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

    /**
     * @return Collection|RandomFightContest[]
     */
    public function getRandomFightContests(): Collection
    {
        return $this->randomFightContests;
    }

    public function addRandomFightContest(RandomFightContest $randomFightContest): self
    {
        if (!$this->randomFightContests->contains($randomFightContest)) {
            $this->randomFightContests[] = $randomFightContest;
            $randomFightContest->setOpponent($this);
        }

        return $this;
    }

    public function removeRandomFightContest(RandomFightContest $randomFightContest): self
    {
        if ($this->randomFightContests->contains($randomFightContest)) {
            $this->randomFightContests->removeElement($randomFightContest);
            // set the owning side to null (unless already changed)
            if ($randomFightContest->getOpponent() === $this) {
                $randomFightContest->setOpponent(null);
            }
        }

        return $this;
    }
}
