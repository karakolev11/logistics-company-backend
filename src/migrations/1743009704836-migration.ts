import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1743009704836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` CREATE TABLE test_1 (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL
            )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS test_1`);
    }

}
