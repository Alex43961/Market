import { Component } from '@angular/core';
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
  productStorage: any[] = [];
  isLoggedIn: boolean = false;
  password: string = "";
  passwordInvalid: boolean = false;
  isModalWindow: boolean = false;
  selectIndex: number = -1;

  constructor(
    private fb: FormBuilder,
    public router: Router) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.pattern('[A-zА-я\s\]+')]],
      productDescription: ['', [Validators.required, Validators.pattern('[A-zА-я\s\d]+')]],
      productImage: ['', [Validators.required]],
      productPrice: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  checkPassword() {
    if (this.password === 'admin') {
      this.isLoggedIn = true;
    } else {
      this.passwordInvalid = true;
    }
  }


  ngOnInit() {
    const storedProducts = localStorage.getItem('productList');
    this.productList = storedProducts ? JSON.parse(storedProducts) : [];
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productList.push({
        image: this.productForm.value.productImage,
        name: this.productForm.value.productName,
        price: +this.productForm.value.productPrice,
        description: this.productForm.value.productDescription
      });

      this.productStorage.push(...this.productList);
      localStorage.setItem('productList', JSON.stringify(this.productStorage));
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

  showModalWindow(i) {
    this.selectIndex = i;
    this.isModalWindow = true;
  }

  hideModalWindow() {
    this.isModalWindow = false;
  }

  deleteProduct() {
    this.productList.splice(this.selectIndex, 1);
    localStorage.setItem('productList', JSON.stringify(this.productList));
    this.hideModalWindow();
  }

  goBack() {
    this.router.navigate(['']);
  }
}
