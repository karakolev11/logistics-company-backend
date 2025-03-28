import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateShipments1743182807610 implements MigrationInterface {
    name = 'CreateShipments1743182807610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_cb552f1221d294cc8744fa47d68"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_e2eabb5e3fc6b1248a60c399d32"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_a07f913aabd55c436ddbc127e36"`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "from_address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "to_address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "courier_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "from_office_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "to_office_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_cb552f1221d294cc8744fa47d68" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_e2eabb5e3fc6b1248a60c399d32" FOREIGN KEY ("from_office_id") REFERENCES "office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_a07f913aabd55c436ddbc127e36" FOREIGN KEY ("to_office_id") REFERENCES "office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_a07f913aabd55c436ddbc127e36"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_e2eabb5e3fc6b1248a60c399d32"`);
        await queryRunner.query(`ALTER TABLE "shipment" DROP CONSTRAINT "FK_cb552f1221d294cc8744fa47d68"`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "to_office_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "from_office_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "courier_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "to_address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ALTER COLUMN "from_address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_a07f913aabd55c436ddbc127e36" FOREIGN KEY ("to_office_id") REFERENCES "office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_e2eabb5e3fc6b1248a60c399d32" FOREIGN KEY ("from_office_id") REFERENCES "office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shipment" ADD CONSTRAINT "FK_cb552f1221d294cc8744fa47d68" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
