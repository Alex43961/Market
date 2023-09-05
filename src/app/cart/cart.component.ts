import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [  ]; 
  selectedCurrency: string = '$'; 
 constructor(private cartService: CartService) {
this.cartItems = this.cartService.getItems();
 }
  removeItem(item: any): void {
    
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(item: any): void {
    
    item.quantity++;
  }

  decreaseQuantity(item: any): void {
    
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  calculateTotal(): number {
    
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }

  checkout(): void {
    
    this.cartItems = [];
  }

  getCartItemCount(): number {
    return this.cartService.getItemCount();
  }
}
