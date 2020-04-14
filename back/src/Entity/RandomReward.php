<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RandomRewardRepository")
 */
class RandomReward
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

     /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Chapter", inversedBy="randomReward")
     * @ORM\JoinColumn(nullable=false)
     */

    private $chapter;

    /**
     * @ORM\Column(type="integer")
     */
    private $rollFrom;

    /**
     * @ORM\Column(type="integer")
     */
    private $rollTo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mainText;

    /**
     * @ORM\Column(type="datetime")
     */
    private $image;

    /**
     * @ORM\Column(type="integer")
     */
    private $minMoney;

    /**
     * @ORM\Column(type="integer")
     */
    private $maxMoney;

    /**
     * @ORM\Column(type="integer")
     */
    private $minXp;

    /**
     * @ORM\Column(type="integer")
     */
    private $maxXp;

    /**
     * @ORM\Column(type="boolean")
     */
    private $twoRolls;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChapter(): ?Chapter
    {
        return $this->chapter;
    }

    public function setChapter(?Chapter $chapter): self
    {
        $this->chapter = $chapter;

        return $this;
    }

    public function getRollFrom(): ?int
    {
        return $this->rollFrom;
    }

    public function setRollFrom(int $rollFrom): self
    {
        $this->rollFrom = $rollFrom;

        return $this;
    }

    public function getRollTo(): ?int
    {
        return $this->rollTo;
    }

    public function setRollTo(int $rollTo): self
    {
        $this->rollTo = $rollTo;

        return $this;
    }

    public function getMainText(): ?string
    {
        return $this->mainText;
    }

    public function setMainText(string $mainText): self
    {
        $this->mainText = $mainText;

        return $this;
    }

    public function getImage(): ?\DateTimeInterface
    {
        return $this->image;
    }

    public function setImage(\DateTimeInterface $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getMinMoney(): ?int
    {
        return $this->minMoney;
    }

    public function setMinMoney(int $minMoney): self
    {
        $this->minMoney = $minMoney;

        return $this;
    }

    public function getMaxMoney(): ?int
    {
        return $this->maxMoney;
    }

    public function setMaxMoney(int $maxMoney): self
    {
        $this->maxMoney = $maxMoney;

        return $this;
    }

    public function getMinXp(): ?int
    {
        return $this->minXp;
    }

    public function setMinXp(int $minXp): self
    {
        $this->minXp = $minXp;

        return $this;
    }

    public function getMaxXp(): ?int
    {
        return $this->maxXp;
    }

    public function setMaxXp(int $maxXp): self
    {
        $this->maxXp = $maxXp;

        return $this;
    }

    public function getTwoRolls(): ?bool
    {
        return $this->twoRolls;
    }

    public function setTwoRolls(bool $twoRolls): self
    {
        $this->twoRolls = $twoRolls;

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
