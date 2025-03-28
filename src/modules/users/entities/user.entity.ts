import { BaseEntity } from "src/modules/common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UserRole } from "../enum/user-role.enum";
import { Office } from "src/modules/offices/entities/office.entity";
import { Shipment } from "src/modules/shipments/entities/shipments.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {

    @Column({
        name: 'username',
        unique: true,
        type: 'varchar',
        length: 20,
        nullable: false
    })
    public username: string;

    @Column({
        name: 'password',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    public password: string;

    @Column({
        name: 'email',
        unique: true,
        type: 'varchar',
        length: 20,
        nullable: false
    })
    public email: string;

    @Column({
        name: 'first_name',
        nullable: true,
        type: 'varchar',
        length: 20,
    })
    public firstName: string;

    @Column({
        name: 'last_name',
        nullable: true,
        type: 'varchar',
        length: 20,
    })
    public lastName: string;

    @Column({
        name: 'phone_number',
        nullable: true,
        type: 'varchar',
        length: 20,
    })
    public phoneNumber: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        nullable: false
    })
    public role: UserRole;

    @ManyToOne(() => Office, office => office.employees, { nullable: true })
    @JoinColumn({ name: "office_id" })
    public office?: Office;

    @OneToMany(() => Shipment, shipment => shipment.sender)
    public shipmentsSent: Shipment[];

    @OneToMany(() => Shipment, shipment => shipment.receiver)
    public shipmentsReceived: Shipment[];

    @OneToMany(() => Shipment, shipment => shipment.courier)
    public shipmentsDelivered: Shipment[];
}
