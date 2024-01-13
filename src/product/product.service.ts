import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductService {
    
    constructor(
        @InjectDataSource()
        private dataSource : DataSource,
    ){}

    getProductList(){
        const qry = 'select * from product_info';
        console.log('qry: ' + qry)
        const qryRes =  this.dataSource.query(qry)
        console.log('qry: ' + qryRes)
        return this.databaseCall();
    }

    async databaseCall(){
        const qry = 'select * from product_info';
        console.log('qry : ' + qry)
        return this.dataSource.query(qry)
     }



}
