import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  productForm: FormGroup;
  productList: { image: string, name: string, price: number, description: string }[] = [];
  imageLoadingFailed: boolean = false;
  productStorage:any[] =[];
  isLoggedIn: boolean = false;
  password:string = "";
 
  constructor(
    private fb: FormBuilder,
    public router: Router) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.pattern('[a-zA-Z\s]+')]],
      productDescription: ['', [Validators.required, Validators.pattern('[a-zA-Z\s\d]+')]],
      productImage: ['', [Validators.required]],
      productPrice: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

   checkPassword() {
    if (this.password === 'admin') {
      this.isLoggedIn = true;
    } else {
      alert('Неправильный пароль');
    }
  }

  
     ngOnInit() {
    const storedProducts = localStorage.getItem('productList');
    this.productList = storedProducts ? JSON.parse(storedProducts) : [];
  console.log("[init]",this.productList)
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productList.push({
        image: this.productForm.value.productImage,
        name: this.productForm.value.productName,
        price: +this.productForm.value.productPrice,
        description: this.productForm.value.productDescription
      });
      // const storedData = localStorage.getItem('productList');
    // if (storedData) {
      // this.productStorage = JSON.parse(storedData);
      this.productStorage.push(...this.productList);
      console.log("[productStorage]",this.productStorage);
    // }

    
      // Сохранить список товаров в localStorage
      localStorage.setItem('productList', JSON.stringify(this.productStorage));
      // Очистить форму
      this.productForm.reset();
      
    }
  }

  checkImage() {
    const image = new Image();
    image.src = this.productForm.value.productImage;
    image.onload = () => {
      this.imageLoadingFailed = false;
    };
    image.onerror = () => {
      this.imageLoadingFailed = true;
    };
  }

  deleteProduct(index: number) {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.productList.splice(index, 1);
      localStorage.setItem('productList', JSON.stringify(this.productList));
    }    
  }

  goBack() {
    this.router.navigate(['']);
  }
}
