import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { promises } from 'dns';
import { Observable, catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    private readonly httpservice: HttpService,
  ){}


  getHello(): string {
    return 'Hello Sudhakar!';
  }


  // not working 
  getProductList1() : Observable<AxiosResponse<any>> {
    const httpres =  this.httpservice.get('http://localhost:3000/api/product/productList');
    console.log('httpres ' + httpres)
    return httpres;
  }

  getProductList3() : Promise<AxiosResponse<any>> {
    const httpres =  this.httpservice.axiosRef.get('http://localhost:3000/api/product/productList');
    console.log('httpres ' + httpres)
    return httpres;
  }

  async getProductList2(): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpservice.get<any[]>('http://localhost:3000/api/product/productList').pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }


}
