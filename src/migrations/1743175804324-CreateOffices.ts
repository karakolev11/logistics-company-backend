import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOffices1743175804324 implements MigrationInterface {
    name = 'CreateOffices1743175804324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "office" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "office_name" character varying(255) NOT NULL, "office_address" character varying(255) NOT NULL, "office_number" character varying(10) NOT NULL, CONSTRAINT "PK_200185316ba169fda17e3b6ba00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "office_id" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6b31546fc92b0d7344f032d0447" FOREIGN KEY ("office_id") REFERENCES "office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6b31546fc92b0d7344f032d0447"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "office_id"`);
        await queryRunner.query(`DROP TABLE "office"`);
    }

}
