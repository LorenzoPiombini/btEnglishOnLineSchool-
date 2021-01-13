import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(typeId?: number): Observable<IPagination | null>{
    let params = new HttpParams();
    if (typeId){
      params = params.append('typeId', typeId.toString());
    }
    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
     .pipe(
       map(response => {
         return response.body;
       })
     );
  }

  getTypes(): Observable<IType[]>{
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
