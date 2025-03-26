import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1743010745343 implements MigrationInterface {
    name = 'Migration1743010745343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test_person" ("id" SERIAL NOT NULL, "pesron_name" character varying(50) NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_6fec4de7d43f461ec792f8b4a2b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test_person"`);
    }

}
