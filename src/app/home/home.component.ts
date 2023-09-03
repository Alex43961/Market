import { Component, Injectable } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Products } from '../products';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  public currentPage:number =1;
  public elementsOnThePage:number = 5;
  products: any = [];



  constructor(
    private productsDataService: ProductsDataService,
    public itemService: ItemService,
    public router: Router) { }



  ngOnInit(): void {
    this.products = this.productsDataService.getProductsList();
    console.log(this.products);
  }

  goItem(product: any) {
    const x = product;
    console.log(x);
    this.itemService.setProduct(product);

    this.router.navigate(['product']);

  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.elementsOnThePage;
  }

  get endIndex(): number {
    return this.startIndex + this.elementsOnThePage;
  }

  get showedProducts(): any[] {
    return this.products.slice(this.startIndex, this.endIndex);
  }
}
