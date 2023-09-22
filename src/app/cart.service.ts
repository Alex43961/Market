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
    console.log(this.items);
  }

  getItems(): any[] {

    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
  getItemsCount(): number {
    let initialValue = 0;
    let sum = this.items.length    
    return sum;
  }
  getTotalPrice(items:any[]){
    for(let item of items){
    item.totalPrice = item.quantity * item.price;
  }
  }


}
