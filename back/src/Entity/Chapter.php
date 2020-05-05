<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ChapterRepository")
 */
class Chapter
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("chapter")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups("chapter")
     */
    private $mainText;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("chapter")
     */
    private $endText;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("chapter")
     */
    private $image;

    /**
     * @ORM\Column(type="integer", unique=true)
     * @Groups("chapter")
     */
    private $orderBy;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Sequence", mappedBy="chapter", orphanRemoval=true)
     * @ORM\OrderBy({"orderBy" = "ASC"})
     * @Groups("chapter")
     */
    private $sequences;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\RandomEvent", mappedBy="chapter", orphanRemoval=true)
     * @ORM\OrderBy({"rollFrom" = "ASC"})
     * @Groups("chapter")
     */
    private $randomEvents;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\RandomFightContest", mappedBy="chapter", orphanRemoval=true)
     * @ORM\OrderBy({"rollFrom" = "ASC"})
     * @Groups("chapter")
     */
    private $randomFightContests;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\RandomAttributeContest", mappedBy="chapter", orphanRemoval=true)
     * @ORM\OrderBy({"rollFrom" = "ASC"})
     * @Groups("chapter")
     */
    private $randomAttributeContests;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\RandomReward", mappedBy="chapter", orphanRemoval=true)
     * @ORM\OrderBy({"rollFrom" = "ASC"})
     * @Groups("chapter")
     */
    private $randomRewards;

    public function __toString()
    {
        return $this->getTitle();
    }

    public function __construct()
    {
        $this->sequences = new ArrayCollection();
        $this->randomEvents = new ArrayCollection();
        $this->randomFightContests = new ArrayCollection();
        $this->createdAt = new \DateTime();
        $this->randomAttributeContests = new ArrayCollection();
        $this->randomRewards = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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

    public function getEndText(): ?string
    {
        return $this->endText;
    }

    public function setEndText(?string $endText): self
    {
        $this->endText = $endText;

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

    public function getOrderBy(): ?int
    {
        return $this->orderBy;
    }

    public function setOrderBy(int $orderBy): self
    {
        $this->orderBy = $orderBy;

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
     * @return Collection|Sequence[]
     */
    public function getSequences(): Collection
    {
        return $this->sequences;
    }

    public function addSequence(Sequence $sequence): self
    {
        if (!$this->sequences->contains($sequence)) {
            $this->sequences[] = $sequence;
            $sequence->setChapter($this);
        }

        return $this;
    }

    public function removeSequence(Sequence $sequence): self
    {
        if ($this->sequences->contains($sequence)) {
            $this->sequences->removeElement($sequence);
            // set the owning side to null (unless already changed)
            if ($sequence->getChapter() === $this) {
                $sequence->setChapter(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|RandomEvent[]
     */
    public function getRandomEvents(): Collection
    {
        return $this->randomEvents;
    }

    public function addRandomEvent(RandomEvent $randomEvent): self
    {
        if (!$this->randomEvents->contains($randomEvent)) {
            $this->randomEvents[] = $randomEvent;
            $randomEvent->setChapter($this);
        }

        return $this;
    }

    public function removeRandomEvent(RandomEvent $randomEvent): self
    {
        if ($this->randomEvents->contains($randomEvent)) {
            $this->randomEvents->removeElement($randomEvent);
            // set the owning side to null (unless already changed)
            if ($randomEvent->getChapter() === $this) {
                $randomEvent->setChapter(null);
            }
        }

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
            $randomFightContest->setChapter($this);
        }

        return $this;
    }

    public function removeRandomFightContest(RandomFightContest $randomFightContest): self
    {
        if ($this->randomFightContests->contains($randomFightContest)) {
            $this->randomFightContests->removeElement($randomFightContest);
            // set the owning side to null (unless already changed)
            if ($randomFightContest->getChapter() === $this) {
                $randomFightContest->setChapter(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|RandomAttributeContest[]
     */
    public function getRandomAttributeContests(): Collection
    {
        return $this->randomAttributeContests;
    }

    public function addRandomAttributeContest(RandomAttributeContest $randomAttributeContest): self
    {
        if (!$this->randomAttributeContests->contains($randomAttributeContest)) {
            $this->randomAttributeContests[] = $randomAttributeContest;
            $randomAttributeContest->setChapter($this);
        }

        return $this;
    }

    public function removeRandomAttributeContest(RandomAttributeContest $randomAttributeContest): self
    {
        if ($this->randomAttributeContests->contains($randomAttributeContest)) {
            $this->randomAttributeContests->removeElement($randomAttributeContest);
            // set the owning side to null (unless already changed)
            if ($randomAttributeContest->getChapter() === $this) {
                $randomAttributeContest->setChapter(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|RandomReward[]
     */
    public function getRandomRewards(): Collection
    {
        return $this->randomRewards;
    }

    public function addRandomReward(RandomReward $randomReward): self
    {
        if (!$this->randomRewards->contains($randomReward)) {
            $this->randomRewards[] = $randomReward;
            $randomReward->setChapter($this);
        }

        return $this;
    }

    public function removeRandomReward(RandomReward $randomReward): self
    {
        if ($this->randomRewards->contains($randomReward)) {
            $this->randomRewards->removeElement($randomReward);
            // set the owning side to null (unless already changed)
            if ($randomReward->getChapter() === $this) {
                $randomReward->setChapter(null);
            }
        }

        return $this;
    }
}
