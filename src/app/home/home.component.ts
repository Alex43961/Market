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
  currentPage: number = 1;
  elementsOnThePage: number = 4;
  filter: string = '';
  products: any[] = [
    {
      name: "iphone 14 pro max GLD",
      price: 999,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/69/63/6369/images/9285/9285.970.png"
    },
    {
      name: "iphone 14 pro max PRP",
      price: 999,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/62/64/6462/images/9416/9416.970.png"
    },
    {
      name: "iphone 14 pro max WHT",
      price: 999,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/74/63/6374/images/9291/9291.970.png"
    },
    {
      name: "iphone 14 pro max BLC",
      price: 999,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/62/63/6362/images/9277/9277.970.png"
    },
    {
      name: "MacBook Air",
      price: 2000,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/72/61/6172/images/9160/9160.970.jpeg"
    },
    {
      name: "Imac 24",
      price: 20,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/00/64/6400/images/9357/9357.970.png"
    },
    {
      name: "MacBook Air 15.5",
      price: 999,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/27/67/6727/images/9541/9541.970.png"
    },
    {
      name: "Ipad Mini",
      price: 800,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/68/66/6668/images/9472/9472.970.png"
    },
    {
      name: "Iphone 13 Pro Max",
      price: 500,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/99/59/5999/images/8927/8927.970.png"
    },
    {
      name: "Iphone 14",
      price: 300,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/33/63/6333/images/9242/9242.970.png"
    },
    {
      name: "Iphone 14",
      price: 450,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/39/63/6339/images/9250/9250.970.png"
    },
    {
      name: "Iphone 14",
      price: 400,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/27/63/6327/images/9231/9231.970.png"
    },
    {
      name: "Iphone 14",
      price: 600,
      image: "https://myapplestyle.com.ua/wa-data/public/shop/products/84/66/6684/images/9503/9503.970.png"
    },
  ];
  filteredProducts: any[] = [];

  constructor(
    private productsDataService: ProductsDataService,
    public itemService: ItemService,
    public router: Router) { }

  ngOnInit(): void {
    // this.products = this.productsDataService.getProductsList();
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
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.filter.toLowerCase())
    );
    return this.filteredProducts.slice(this.startIndex, this.endIndex);
  }

  goToAdminPage() {
    this.router.navigate(['admin-page']);
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
