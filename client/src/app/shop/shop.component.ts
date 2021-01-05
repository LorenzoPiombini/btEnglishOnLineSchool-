import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { IProduct } from '../shared/modules/product';
import { IType } from '../shared/modules/ProductType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products!: IProduct[];
  types!: IType[];
  typeIdSelected = 0;



  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getTypes();
    this.getProducts();

  }

  // tslint:disable-next-line: typedef
  getProducts(){
    this.shopService.getProducts(this.typeIdSelected).subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });

  }

  // tslint:disable-next-line: typedef
  getTypes(){
    this.shopService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: 'Tutti'}, ...response];

    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  onTypeSelected(typeId: number){
    this.typeIdSelected = typeId;
    this.getProducts();

  }

}
