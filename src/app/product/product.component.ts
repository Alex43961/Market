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
  comments: string[] = [];
  newCommentText: string = '';

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
    // Загрузка комментариев из local Storage;
    const storedComments = localStorage.getItem('productComments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);

  }

  // Добавление комментария
  addComment() {
    if (this.newCommentText.trim() !== '') {
      // Заменяем слова и символы
      const sanitizedComment = this.newCommentText.replace(/кокос|банан|плохой|@/gi, '*');
      this.comments.push(sanitizedComment);

      // Сохраняем обновленные комментарии в localStorage
      localStorage.setItem('productComments', JSON.stringify(this.comments));

      // Очищаем поле для нового комментария
      this.newCommentText = '';
    }
  }
}




