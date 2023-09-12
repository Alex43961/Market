import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { HomeComponent } from '../home/home.component';
import { ProductsDataService } from '../products-data.service';
import { CartService } from '../cart.service';
import { CommentsService } from '../comments.service';
import { Comment } from '../comments';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: any;
  commentsList:any = { name: '', comments: [] };
  
  myComments: any[] = [];
  newCommentText: string = '';
  savedComments = this.commentsService.getItem('commentsList');



  constructor(private productsDataService: ProductsDataService,
    public itemService: ItemService,
    private cartService: CartService,
    public router: Router,
    private commentsService: CommentsService
  ) { }

  goBack() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    const items = this.itemService.getProduct();
    this.product = items[items.length - 1];

    this.loadComments();

  }

  loadComments():void {
    console.log("savedComments", this.savedComments);

    if (this.savedComments) {

 function findObjectByName(arr: any[], nameToFind: string): any| undefined {
    return arr.find(obj => obj.name === nameToFind);
}

const foundObject = findObjectByName(this.savedComments, this.product.name);

if (foundObject) {
  this.commentsList = foundObject;
    console.log('Найден объект:', foundObject);
} 
//else {
//     this.commentsList.name = this.product.name;
//         this.commentsList.comments.push(newComment);
//         this.myComments.push(this.commentsList);
//     console.log('Объект не найден');
// }
      // let productComments: any;

      // for (let key in this.savedComments) {

      //   if (this.savedComments[key] === this.product.name) {
      //     productComments = this.savedComments;
      //     console.log("key", this.savedComments[key])
      //     console.log("productComments", productComments);

      //   }


      // }
      // if (productComments) {
      //   this.commentsList = productComments;
      // }
    }
    console.log("productName", this.product.name);
    console.log("commentsList", this.commentsList);
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);

  }


  addComment(newComment: string): void {
    if (this.savedComments && this.savedComments !==undefined) {
      this.myComments=this.savedComments;

      console.log("myComments", this.myComments)

      function findObjectByName(arr: any[], nameToFind: string): any| undefined {
    return arr.find(obj => obj.name === nameToFind);
}

const foundObject = findObjectByName(this.myComments, this.product.name);

if (foundObject) {
   console.log('Найден объект:', foundObject);
  foundObject.comments.push(newComment);
   
} else {
  console.log('Объект не найден');
   this.commentsList.name = this.product.name;
        this.commentsList.comments.push(newComment);
        this.myComments.push(this.commentsList);
        console.log("myComments 2", this.myComments)
    
}

      // for (let key in this.myComments) {
      //   if (this.myComments[key] === this.product.name) {
      //     console.log('key', this.myComments[key])
      //     this.myComments[key].comments.push(newComment);
      //   }
      // }

      // if(this.savedComments.length <= 1) {
      
      // }

      //     if(this.savedComments && this.savedComments!== undefined){
      //       for(let key in this.savedComments){
      // if (this.savedComments[key] === this.product.name){
      //   this.savedComments.comments.push(newComment);
      // }else{

      // }
      // }
    }


    this.commentsService.setItem('commentsList', this.myComments);
    this.newCommentText = '';
    this.loadComments();
  }
}




