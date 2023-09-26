import { Component} from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsDataService]
})

export class HomeComponent {
  currentPage: number = 1;
  elementsOnThePage: number = 5;
  filter: string = '';
  products: any[] = [
    {
      name: 'Apple iPhone 15 Pro Max 256GB Black Titanium (MU773)',
      price: 999.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-1__ww-en.jpg'
    },
    {
      name: 'Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793)',
      price: 999.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-1__ww-en_2.jpg'
    },
    {
      name: 'Apple iPhone 15 Pro Max 256GB Blue Titanium (MU7A3)',
      price: 999.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_blue_titanium_pdp_image_position-1__ww-en_3.jpg'
    },
    {
      name: 'Apple iPhone 15 Pro Max 256GB White Titanium (MU783)',
      price: 999.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_pro_max_white_titanium_pdp_image_position-1__ww-en_3.jpg'
    },
    {
      name: 'Apple iPhone 14 Pro Max 256GB Deep Purple (MQ9X3)',
      price: 799.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a_2.jpg'
    },
    {
      name: 'Apple iPhone 15 128GB Blue (MTP43)',
      price: 499.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_blue_pdp_image_position-1__ww-en.jpg'
    },
    {
      name: 'Apple iPhone 15 128GB Dark (MTP43)',
      price: 499.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_black_pdp_image_position-1__ww-en.jpg'
    },
    {
      name: 'Apple iPhone 15 128GB Pink (MTP43)',
      price: 499.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_pink_pdp_image_position-1__ww-en.jpg'
    },
    {
      name: 'Apple iPhone 15 128GB Yellow (MTP43)',
      price: 499.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_yellow_pdp_image_position-1__ww-en.jpg'
    },
    {
      name: 'Apple iPhone 15 128GB Green (MTP43)',
      price: 499.99,
      description: 'Айфон (iPhone) - это линейка смартфонов, разработанная и производимая американской компанией Apple. iPhone был впервые представлен в 2007 году и с тех пор стал одним из самых популярных и влиятельных смартфонов в мире.',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_green_pdp_image_position-1__ww-en.jpg'
    },

    {
      name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKW3) Midnight',
      price: 499.99,
      description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-midnight-gallery1-202306_result_1.jpg'
    },

    {
      name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKP3) Space Grey',
      price: 499.99,
      description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-spacegray-gallery1-202306_result_1.jpg'
    },

    {
      name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKU3) Starlight',
      price: 499.99,
      description: '/dsf',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-starlight-gallery1-202306_result_1.jpg'
    },

    {
      name: 'Ноутбук Apple MacBook Air 15" M2 256GB (MQKR3) Silver',
      price: 499.99,
      description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-silver-gallery1-202306_result_1.jpg'
    },

    {
      name: 'Ноутбук Apple MacBook Pro 13" M2 16/512GB (Z16R002DS) Space Grey',
      price: 499.99,
      description: 'Макбук (MacBook) - это линейка ноутбуков, разработанных и производимых американской компанией Apple. MacBook известен своим стильным дизайном, высокой производительностью и экосистемной интеграцией с другими устройствами Apple',
      imageUrl: 'https://i.allo.ua/media/catalog/product/cache/3/image/620x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/6/1682044_zoom.jpg'
    },
  ];
  filteredProducts: any[] = [];

  constructor(
    private productsDataService: ProductsDataService,
    public itemService: ItemService,
    private cartService: CartService,
    public router: Router) { }

  ngOnInit(): void {
    let productStorage: any[] = [];
    let storedData = localStorage.getItem('productList');
    if (storedData) {
      productStorage = JSON.parse(storedData);
    }
    this.products.push(...productStorage);
  }

  goItem(product: any) {
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

  getCartItemCount(): number {
    return this.cartService.getItemsCount();
  }

  nextPage() {
    if (this.currentPage < this.pageCount) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get pageCount(): number {
    return Math.ceil(this.filteredProducts.length / this.elementsOnThePage);
  }
}
