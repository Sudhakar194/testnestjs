import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// this represent table , if table not exists it will create new table
@Entity({
    name:'user_info_from_entity' // if name attribute is not avaliable, nest use the class name as table name
})
export class User{
    
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'user_id',        
    })
    id: string ;

    @Column({
        name: 'last_name',
        default: '',
        nullable: false,        
    })
    lastname: string;

    @Column({
        name: 'first_name',
    })
    firstname: string;

    @Column({
        name:'full_name',
        default: ''
    })
    fullname : string;

    @Column({default: 'India'})
    state : string;
}