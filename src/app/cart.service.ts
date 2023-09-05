import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  constructor() { }


  addToCart(item: any): void {
    item.quantity = 1;
    const existingItem = this.items.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
  getItemCount(): number {
    let initialValue = 0;
let sum = this.items.reduce(
  (accumulator, currentValue) => accumulator + currentValue.quantity,
  initialValue,
);
return sum;
// sum == 6

    // return this.items.length;
  }


}
