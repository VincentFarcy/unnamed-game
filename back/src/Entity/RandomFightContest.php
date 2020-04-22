<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RandomFightContestRepository")
 */
class RandomFightContest
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Chapter", inversedBy="randomFightContests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $chapter;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Opponent", inversedBy="randomFightContests")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("chapter")
     */
    private $opponent;

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
     * @ORM\Column(type="text", nullable=true)
     * @Groups("chapter")
     */
    private $mainText;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("chapter")
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

    public function __toString()
    {
        return $this->opponent->getName();
    }

    public function __construct()
    {
        $this->createdAt = new \DateTime();
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

    public function getOpponent(): ?Opponent
    {
        return $this->opponent;
    }

    public function setOpponent(?Opponent $opponent): self
    {
        $this->opponent = $opponent;

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

    public function setMainText(?string $mainText): self
    {
        $this->mainText = $mainText;

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
}
