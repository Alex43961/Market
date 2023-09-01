import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Products } from '../products';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
}
