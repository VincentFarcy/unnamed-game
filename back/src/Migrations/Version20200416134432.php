<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200416134432 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE attribute (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE random_reward (id INT AUTO_INCREMENT NOT NULL, chapter_id INT NOT NULL, roll_from INT NOT NULL, roll_to INT NOT NULL, main_text VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, min_money INT NOT NULL, max_money INT NOT NULL, min_xp INT NOT NULL, max_xp INT NOT NULL, two_rolls TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_5E3F07AF579F4768 (chapter_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE random_attribute_contest (id INT AUTO_INCREMENT NOT NULL, chapter_id INT NOT NULL, attribute_id INT NOT NULL, roll_from INT NOT NULL, roll_to INT NOT NULL, main_text VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, min_level INT NOT NULL, max_level INT NOT NULL, damage_nb_roll INT NOT NULL, damage_min INT NOT NULL, damage_max INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_97C3D554579F4768 (chapter_id), INDEX IDX_97C3D554B6E62EFA (attribute_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE random_reward ADD CONSTRAINT FK_5E3F07AF579F4768 FOREIGN KEY (chapter_id) REFERENCES chapter (id)');
        $this->addSql('ALTER TABLE random_attribute_contest ADD CONSTRAINT FK_97C3D554579F4768 FOREIGN KEY (chapter_id) REFERENCES chapter (id)');
        $this->addSql('ALTER TABLE random_attribute_contest ADD CONSTRAINT FK_97C3D554B6E62EFA FOREIGN KEY (attribute_id) REFERENCES attribute (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE random_attribute_contest DROP FOREIGN KEY FK_97C3D554B6E62EFA');
        $this->addSql('DROP TABLE attribute');
        $this->addSql('DROP TABLE random_reward');
        $this->addSql('DROP TABLE random_attribute_contest');
    }
}
