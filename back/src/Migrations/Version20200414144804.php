<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200414144804 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE random_attribute_contest ADD attribute_id INT NOT NULL');
        $this->addSql('ALTER TABLE random_attribute_contest ADD CONSTRAINT FK_97C3D554B6E62EFA FOREIGN KEY (attribute_id) REFERENCES attribute (id)');
        $this->addSql('CREATE INDEX IDX_97C3D554B6E62EFA ON random_attribute_contest (attribute_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE random_attribute_contest DROP FOREIGN KEY FK_97C3D554B6E62EFA');
        $this->addSql('DROP INDEX IDX_97C3D554B6E62EFA ON random_attribute_contest');
        $this->addSql('ALTER TABLE random_attribute_contest DROP attribute_id');
    }
}
