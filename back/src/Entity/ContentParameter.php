<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContentParameterRepository")
 */
class ContentParameter
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("content-parameter")
     */
    private $label;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("content-parameter")
     */
    private $longContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("content-parameter")
     */
    private $shortContent;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getLongContent(): ?string
    {
        return $this->longContent;
    }

    public function setLongContent(?string $longContent): self
    {
        $this->longContent = $longContent;

        return $this;
    }

    public function getShortContent(): ?string
    {
        return $this->shortContent;
    }

    public function setShortContent(?string $shortContent): self
    {
        $this->shortContent = $shortContent;

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
