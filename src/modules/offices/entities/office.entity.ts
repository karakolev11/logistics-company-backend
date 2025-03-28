import { UserEntity } from "src/modules/users/entities/user.entity";
import { BaseEntity } from "src/modules/common/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({name:"office"})
export class Office extends BaseEntity{
    @Column({
        name:"office_name",
        type:"varchar",
        length:255,
        nullable:false
    })
    public officeName:string;

    @Column({
        name:"office_address",
        type:"varchar",
        length:255,
        nullable:false
    })
    public officeAddress:string;

    @Column({
        name:"office_number",
        type:"varchar",
        length:10,
        nullable:false
    })
    public officeNumber:string;

    @OneToMany(() => UserEntity, user => user.office)
    public employees: UserEntity[];
}