import { Controller, Get, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response, response } from 'express';

@Controller('product') // http path 
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get('productList')
    getProductList(){
        console.log('inside product controller - getProductList')
        return this.productService.getProductList();        
    }


}
