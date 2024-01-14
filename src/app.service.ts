import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    private readonly httpservice: HttpService,
  ){}


  getHello(): string {
    return 'Hello Sudhakar!';
  }


  getProductList() : Observable<AxiosResponse<any[]>> {
      return this.httpservice.get('http://localhost:3000/api/product/productList');
  }




}
