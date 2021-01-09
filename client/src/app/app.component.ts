import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  products: IProduct[] = [];
  title = 'BT English and More';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.http.get('https://localhost:5001/api/products').subscribe((response: IPagination | any) => {
    this.products = response.data;
  }, error => {
      console.log(error);
    });
  }

}
