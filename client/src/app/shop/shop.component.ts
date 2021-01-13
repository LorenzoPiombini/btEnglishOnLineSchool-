import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/type';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
 products: IProduct[] = [];
 types: IType[] = [];
 typeIdSelected!: number;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  this.getTypes();
  this.getProducts();
  }

  getProducts(): void{
// tslint:disable-next-line: deprecation
this.shopService.getProducts(this.typeIdSelected).subscribe((response: IPagination | null) => {
  if (response){
  this.products = response.data;
  } else{
    console.log('no response!! something wrong ');
  }
}, error => {
  console.log(error);
});
  }

  getTypes(): void{
    // tslint:disable-next-line: deprecation
    this.shopService.getTypes().subscribe((response) => {
      this.types = [{id: 0, name: 'Tutti'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  onTypeSelected(typeId: number): void{
    this.typeIdSelected = typeId;
    this.getProducts();
  }

}
