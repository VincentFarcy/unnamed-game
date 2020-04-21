<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AttributeRepository")
 */
class Attribute
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"chapter", "attribute"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("attribute")
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\RandomAttributeContest", mappedBy="attribute", orphanRemoval=true)
     * @Groups("chapter")
     */
    private $randomAttributeContests;

    public function __toString()
    {
        return $this->getName();
    }

    public function __construct()
    {
        $this->randomAttributeContests = new ArrayCollection();
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
            $randomAttributeContest->setAttribute($this);
        }

        return $this;
    }

    public function removeRandomAttributeContest(RandomAttributeContest $randomAttributeContest): self
    {
        if ($this->randomAttributeContests->contains($randomAttributeContest)) {
            $this->randomAttributeContests->removeElement($randomAttributeContest);
            // set the owning side to null (unless already changed)
            if ($randomAttributeContest->getAttribute() === $this) {
                $randomAttributeContest->setAttribute(null);
            }
        }

        return $this;
    }
}
