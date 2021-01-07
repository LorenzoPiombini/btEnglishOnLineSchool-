import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { IProduct } from '../shared/modules/product';
import { IType } from '../shared/modules/ProductType';
import { ShopParams } from '../shared/modules/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: true}) searchTerm!: ElementRef;
  products: IProduct[] = [];
  types: IType[] = [] ;
  shopParams = new ShopParams();
  totalCount = 0;
  sortOptions = [
    {name: 'Alfabetico', value: 'name'},
    {name: 'dal prezzo piu´ basso al piu´ alto ', value: 'priceAsc'},
    {name: 'dal prezzo piu´ alto al piu´ basso', value: 'priceDesc'}
  ];



  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getTypes();
    this.getProducts();

  }

  // tslint:disable-next-line: typedef
  getProducts(){
    // tslint:disable-next-line: deprecation
    this.shopService.getProducts(this.shopParams).subscribe(response => {
      if (response !== null){
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.count;
      } else {
        this.products = [];
        this.shopParams.pageNumber = 1;
        this.shopParams.pageSize = 50;
        this.totalCount = 0;
      }
    }, error => {
      console.log(error);
    });

  }

  // tslint:disable-next-line: typedef
  getTypes(){
    // tslint:disable-next-line: deprecation
    this.shopService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: 'Tutti'}, ...response];

    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  onTypeSelected(typeId: number){
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();

  }

  // tslint:disable-next-line: typedef
  onSortSelected(sort: string){
    this.shopParams.sort = sort;
    this.shopParams.pageNumber = 1;
    this.getProducts();

  }

  // tslint:disable-next-line: typedef
  onPageChanged(event: any){
    if (this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  // tslint:disable-next-line: typedef
  onSearch(){
    this.shopParams.search = this.searchTerm.nativeElement.value;
  }

  // tslint:disable-next-line: typedef
  onReset(){
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();

  }

}
