import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

 product:Products[] = [];

  constructor() { }

  setProduct(item:Products){   
     this.product.push(item);
    
    console.log(this.product);
    
  }
  getProduct(){
    return this.product;
  }
}
