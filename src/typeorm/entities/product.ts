import { Column, Entity } from "typeorm";

@Entity()
export class Product{

    @Column()
    product_id: string;

    @Column()
    product_name : string;


}