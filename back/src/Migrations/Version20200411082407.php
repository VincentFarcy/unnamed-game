<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200411082407 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE backup (id INT AUTO_INCREMENT NOT NULL, sequence_id INT NOT NULL, hero_id INT NOT NULL, name VARCHAR(255) NOT NULL, score INT DEFAULT NULL, strength INT NOT NULL, agility INT NOT NULL, constitution INT NOT NULL, will INT NOT NULL, intelligence INT NOT NULL, health INT NOT NULL, xp INT NOT NULL, money INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_3FF0D1AC98FB19AE (sequence_id), INDEX IDX_3FF0D1AC45B0BCD (hero_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE random_fight_contest (id INT AUTO_INCREMENT NOT NULL, chapter_id INT NOT NULL, opponent_id INT NOT NULL, roll_from INT NOT NULL, roll_to INT NOT NULL, main_text LONGTEXT DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_2D06C021579F4768 (chapter_id), INDEX IDX_2D06C0217F656CDC (opponent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE hero (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, name VARCHAR(255) NOT NULL, gender VARCHAR(1) NOT NULL, image VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_51CE6E86A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_parameter (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, value INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE chapter (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, main_text LONGTEXT NOT NULL, end_text LONGTEXT DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, order_by INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_F981B52ED6DD82A (order_by), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE random_event (id INT AUTO_INCREMENT NOT NULL, chapter_id INT NOT NULL, roll_from INT NOT NULL, roll_to INT NOT NULL, main_text LONGTEXT DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, type VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_FA1AC3D579F4768 (chapter_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE opponent (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, speed INT NOT NULL, touch INT NOT NULL, dodge INT NOT NULL, armor INT NOT NULL, health INT NOT NULL, damage_nb_roll INT NOT NULL, damage_min INT NOT NULL, damage_max INT NOT NULL, xp_gain INT NOT NULL, money_gain INT NOT NULL, image VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE content_parameter (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, long_content LONGTEXT DEFAULT NULL, short_content VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sequence (id INT AUTO_INCREMENT NOT NULL, chapter_id INT NOT NULL, title VARCHAR(255) NOT NULL, order_by INT NOT NULL, main_text LONGTEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_5286D72BD6DD82A (order_by), INDEX IDX_5286D72B579F4768 (chapter_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE backup ADD CONSTRAINT FK_3FF0D1AC98FB19AE FOREIGN KEY (sequence_id) REFERENCES sequence (id)');
        $this->addSql('ALTER TABLE backup ADD CONSTRAINT FK_3FF0D1AC45B0BCD FOREIGN KEY (hero_id) REFERENCES hero (id)');
        $this->addSql('ALTER TABLE random_fight_contest ADD CONSTRAINT FK_2D06C021579F4768 FOREIGN KEY (chapter_id) REFERENCES chapter (id)');
        $this->addSql('ALTER TABLE random_fight_contest ADD CONSTRAINT FK_2D06C0217F656CDC FOREIGN KEY (opponent_id) REFERENCES opponent (id)');
        $this->addSql('ALTER TABLE hero ADD CONSTRAINT FK_51CE6E86A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE random_event ADD CONSTRAINT FK_FA1AC3D579F4768 FOREIGN KEY (chapter_id) REFERENCES chapter (id)');
        $this->addSql('ALTER TABLE sequence ADD CONSTRAINT FK_5286D72B579F4768 FOREIGN KEY (chapter_id) REFERENCES chapter (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE backup DROP FOREIGN KEY FK_3FF0D1AC45B0BCD');
        $this->addSql('ALTER TABLE random_fight_contest DROP FOREIGN KEY FK_2D06C021579F4768');
        $this->addSql('ALTER TABLE random_event DROP FOREIGN KEY FK_FA1AC3D579F4768');
        $this->addSql('ALTER TABLE sequence DROP FOREIGN KEY FK_5286D72B579F4768');
        $this->addSql('ALTER TABLE random_fight_contest DROP FOREIGN KEY FK_2D06C0217F656CDC');
        $this->addSql('ALTER TABLE backup DROP FOREIGN KEY FK_3FF0D1AC98FB19AE');
        $this->addSql('DROP TABLE backup');
        $this->addSql('DROP TABLE random_fight_contest');
        $this->addSql('DROP TABLE hero');
        $this->addSql('DROP TABLE game_parameter');
        $this->addSql('DROP TABLE chapter');
        $this->addSql('DROP TABLE random_event');
        $this->addSql('DROP TABLE opponent');
        $this->addSql('DROP TABLE content_parameter');
        $this->addSql('DROP TABLE sequence');
    }
}
