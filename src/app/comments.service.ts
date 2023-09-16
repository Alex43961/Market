import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  private commentsListKey = 'commentsList';

  // getCommentsList() {
  //   const commentsStorage = localStorage.getItem(this.commentsListKey);
  //   if (commentsStorage) {
  //     const commentsList = JSON.parse(commentsStorage);
  //     return commentsList;
  //   }


  // }

  // updateCommentsList(commentsList:any[]) {
  //   localStorage.setItem(this.commentsListKey, JSON.stringify(commentsList));
  // }

  // addComment(productName: string, comment: string) {
  //   const commentsList = this.getCommentsList();
  //   const productIndex = commentsList.findIndex(product => product.name === productName);

  //   if (productIndex !== -1) {
  //     commentsList[productIndex].comments.push(comment);
  //   } else {
  //     commentsList.push({ name: productName, comments: [comment] });
  //   }

  //   this.updateCommentsList(commentsList);
  // }

  getItem(key: string): any {
    const itemList = localStorage.getItem(key);
    if(itemList){
      return JSON.parse( itemList);
    }
    
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

