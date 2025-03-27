import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1743095929188 implements MigrationInterface {
    name = 'CreateUser1743095929188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('Admin', 'Client', 'Employee')`);
        await queryRunner.query(`CREATE TABLE "users" (
            "id" SERIAL NOT NULL, 
            "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
            "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
            "deletedAt" TIMESTAMP WITH TIME ZONE, 
            "username" character varying(20) NOT NULL, 
            "password" character varying(20) NOT NULL, 
            "email" character varying(20) NOT NULL, 
            "first_name" character varying(20), 
            "last_name" character varying(20), 
            "phone_number" character varying(20), 
            "role" "public"."users_role_enum" NOT NULL, 
            CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), 
            CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), 
            CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }

}
