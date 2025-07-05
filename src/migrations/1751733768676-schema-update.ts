import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1751733768676 implements MigrationInterface {
  name = 'SchemaUpdate1751733768676';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "news" ALTER COLUMN "title" SET DEFAULT '3213'`,
    );
    await queryRunner.query(
      `ALTER TABLE "news" ALTER COLUMN "description" SET DEFAULT '3213'`,
    );
    await queryRunner.query(
      `ALTER TABLE "news" ALTER COLUMN "number" SET DEFAULT '1'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "news" ALTER COLUMN "number" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "news" ALTER COLUMN "description" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "news" ALTER COLUMN "title" DROP DEFAULT`,
    );
  }
}
