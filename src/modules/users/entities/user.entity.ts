import { BaseEntity } from "src/modules/common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { UserRole } from "../enum/user-role.enum";
import { Office } from "src/modules/offices/entities/office.entity";

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
    public email: string; // Unique email

    @Column({ 
        name: 'first_name',
        nullable: true,
        type: 'varchar',
        length: 20,
    })
    public firstName: string; // First name of the user

    @Column({ 
        name: 'last_name',
        nullable: true,
        type: 'varchar',
        length: 20,
    })
    public lastName: string; // Last name of the user
    
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
    public role: UserRole; // User's role (e.g., 'client', 'employee', 'admin')

    @ManyToOne(() => Office, office => office.employees, { nullable: true })
    @JoinColumn({ name: "office_id" }) 
    public office?: Office;
}