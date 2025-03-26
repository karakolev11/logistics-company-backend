import { BaseEntity } from "src/modules/common/entities/base.entity";
import { Column } from "typeorm";
import { UserRole } from "../enum/user-role.enum";

export class User extends BaseEntity {

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

}