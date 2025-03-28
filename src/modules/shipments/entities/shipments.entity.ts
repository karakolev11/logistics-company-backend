import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { Office } from "src/modules/offices/entities/office.entity";
import { ShipmentStatus } from "../enums/shipments-status.enum";
import { BaseEntity } from "src/modules/common/entities/base.entity";

@Entity({ name: "shipment" })
export class Shipment extends BaseEntity {
    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: "sender_id" })
    public sender: UserEntity;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: "receiver_id" })
    public receiver: UserEntity;

    @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: "courier_id" })
    public courier?: UserEntity;

    @ManyToOne(() => Office, { nullable: true })
    @JoinColumn({ name: "from_office_id" })
    public fromOffice?: Office;

    @ManyToOne(() => Office, { nullable: true })
    @JoinColumn({ name: "to_office_id" })
    public toOffice?: Office;

    @Column({
        name: "from_address",
        type: "varchar",
        length: 255,
        nullable: true
    })
    public fromAddress?: string;

    @Column({
        name: "to_address",
        type: "varchar",
        length: 255,
        nullable: true
    })
    public toAddress?: string;

    @Column({
        name: "weight",
        type: "float",
        nullable: false
    })
    public weight: number;

    @Column({
        name: "price",
        type: "float",
        nullable: false
    })
    public price: number;

    @Column({
        name: "status",
        type: "enum",
        enum: ShipmentStatus,
        default: ShipmentStatus.REGISTERED
    })
    public status: ShipmentStatus;
}

