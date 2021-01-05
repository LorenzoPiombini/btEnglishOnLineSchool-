
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/modules/paginations';
import {IType} from '../shared/modules/ProductType';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getProducts(typeId?: number){
    let params = new HttpParams();
    if (typeId) {
      params = params.append('typeId', typeId.toString());

    }

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
       .pipe(
         map(response => {
           return response.body;
         })
       );
  }

  // tslint:disable-next-line: typedef
  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
