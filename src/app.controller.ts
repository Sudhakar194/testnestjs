import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  resultList = [{
    itemId: 'item 1',
    itemName: 'item name 1',
    itemCode: 'item code 1'
  },
  {
    itemId: 'item 2',
    itemName: 'item name 2',
    itemCode: 'item code 2'
  }];

  @Get('/ResultList')
  getResultList() {
    return this.resultList;
  }

  @Get('/ResultList1')
  getResultList1(@Res() response: Response) {
      response.status(200).send(this.resultList);
  }


  
  // calling internal database but using http localhost 
  // npm i --save @nestjs/axios axios
  @Get('/getProductList_Http1')
  getProductList1() {
      return this.appService.getProductList1();
  }

  @Get('/getProductList_Http2')
  getProductList2() {
      return this.appService.getProductList2();
  }
  
  @Get('/getProductList_Http3')
  getProductList3() {
      return this.appService.getProductList2();
  }


}
