import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './modules/product';
import {IPagination} from './modules/paginations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Bt English and More';
  products!: IProduct[] ;


  constructor(private http: HttpClient) {}


  ngOnInit(): void {
      this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe(
        (response: any) => {
      this.products = response.data;


      },
      error => {
        console.log(error);
      });
  }
}
