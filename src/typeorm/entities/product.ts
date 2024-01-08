import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'product_info_from_entity',
})
export class Product{

    @PrimaryGeneratedColumn({
        name: 'product_id',
        type: 'int',
    })
    id: string;

    @Column({
        name: 'product_name',
        default: '',
        nullable: false,        
    })
    productName : string;


}