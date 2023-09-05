import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { HomeComponent } from '../home/home.component';
import { ProductsDataService } from '../products-data.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
product: any;

  constructor(private productsDataService: ProductsDataService,
    public itemService: ItemService,
    private cartService: CartService,
    public router: Router
  ) { }

  goBack() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    const items = this.itemService.getProduct();
    this.product = items[items.length - 1];   
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);

}


}
