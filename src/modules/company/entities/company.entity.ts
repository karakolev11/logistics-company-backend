import { BaseEntity } from "src/modules/common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity({name:"company"})
export class Company extends BaseEntity{
    @Column({
        name:"company_name",
        type:"varchar",
        length:255,
        nullable:false
    })
    public companyName:string;

    @Column({
        name:"company_address",
        type:"varchar",
        length:255,
        nullable:false
    })
    public companyAddress:string;

    @Column({
        name:"BULSTAT",
        type:"varchar",
        length:10,
        nullable:false
    })
    public bulstat:string;
}