import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/modules/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product!: IProduct;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  // tslint:disable-next-line: typedef
  loadProduct(){
    // tslint:disable-next-line: deprecation

    // tslint:disable-next-line: no-non-null-assertion
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')!)
    // tslint:disable-next-line: deprecation
    .subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    });
  }
}
