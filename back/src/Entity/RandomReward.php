<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

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
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $rollFrom;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $rollTo;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("chapter")
     */
    private $mainText;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("chapter")
     */
    private $image;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $minMoney;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $maxMoney;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $minXp;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $maxXp;

    /**
     * @ORM\Column(type="boolean")
     * @Groups("chapter")
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

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Chapter", inversedBy="randomRewards")
     * @ORM\JoinColumn(nullable=false)
     */
    private $chapter;

    public function __toString()
    {
        return $this->getMainText();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getChapter(): ?Chapter
    {
        return $this->chapter;
    }

    public function setChapter(?Chapter $chapter): self
    {
        $this->chapter = $chapter;

        return $this;
    }
}
