import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    user_id: string ;

    @Column()
    last_name: string;

    @Column()
    first_name: string;

    @Column()
    middle_name : string;

    @Column()
    full_name : string;

    @Column({default: 'India'})
    state : string;
}