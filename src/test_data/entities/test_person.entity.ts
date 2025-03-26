import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'test_person'})
export class PersonEntity {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        name: 'pesron_name',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    public personName: string;

    @Column({ 
        name: 'age',
        type: 'int',
        nullable: false
    })
    public age: number;

}