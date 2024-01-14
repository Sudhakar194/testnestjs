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
        return this.databaseCall();
    }

    async databaseCall(){
        const qryRes = await this.dataSource.query('select * from product_info')
        console.log('qryRes ' + (typeof qryRes))
        console.log(JSON.stringify(qryRes))  // user await otherwise returning empty object
       // console.log(JSON.parse(qryRes))
        return  JSON.stringify(qryRes)
     }



}
