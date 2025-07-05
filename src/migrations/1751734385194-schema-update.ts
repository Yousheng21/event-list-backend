import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1751734385194 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO public.news(
	title, description, "number")
	VALUES ('gfdgfdgz', 'fdsf fsdf', 123);`);

    await queryRunner.query(`INSERT INTO public.news(
	title, description, "number")
	VALUES ('gfdgfdgz', 'fdsf fsdf', 123);`);

    await queryRunner.query(`INSERT INTO public.news(
	title, description, "number")
	VALUES ('gfdgfdgz', 'fdsf fsdf', 123);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
