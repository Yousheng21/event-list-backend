import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1751896632195 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO news (title, description, number, date, city, company) VALUES ('title1', 'desc1', 1, '2025-07-06T10:05:24.865Z', 'city', 'company'), ('title1', 'desc1', 1, '2025-07-06T10:05:24.865Z', 'city', 'company'), ('title1', 'desc1', 1, '2025-07-06T10:05:24.865Z', 'city', 'company'), ('title1', 'desc1', 1, '2025-07-06T10:05:24.865Z', 'city', 'company'), ('title1', 'desc1', 1, '2025-07-06T10:05:24.865Z', 'city', 'company'), ('title1', 'desc1', 1, '2025-07-06T10:05:24.865Z', 'city', 'company');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
