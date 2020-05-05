<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RandomAttributeContestRepository")
 */
class RandomAttributeContest
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Chapter", inversedBy="randomAttributeContests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $chapter;

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
    private $minLevel;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $maxLevel;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $damageNbRoll;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $damageMin;

    /**
     * @ORM\Column(type="integer")
     * @Groups("chapter")
     */
    private $damageMax;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Attribute", inversedBy="randomAttributeContests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $attribute;

    public function __toString()
    {
        return $this->getMainText();
    }

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

    public function getMinLevel(): ?int
    {
        return $this->minLevel;
    }

    public function setMinLevel(int $minLevel): self
    {
        $this->minLevel = $minLevel;

        return $this;
    }

    public function getMaxLevel(): ?int
    {
        return $this->maxLevel;
    }

    public function setMaxLevel(int $maxLevel): self
    {
        $this->maxLevel = $maxLevel;

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

    public function getAttribute(): ?Attribute
    {
        return $this->attribute;
    }

    public function setAttribute(?Attribute $attribute): self
    {
        $this->attribute = $attribute;

        return $this;
    }
}
