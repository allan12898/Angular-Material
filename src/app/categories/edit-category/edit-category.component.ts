import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../icategory';
import { ProductsService } from '../../products/products.service';
import { IProduct } from '../../products/IProduct';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private http: CategoriesService, private routes: ActivatedRoute
    , private fb: FormBuilder, private router: Router, private productServices : ProductsService) { }

  ngOnInit() {
    //this.initCategoryForm();
    this.getCategory(this.id)
    this.getProduct(this.id)
    // console.log(this.products)
    // console.log(this.productCategory)
  }

  categoryForm: FormGroup;
  category: ICategory;
  products: IProduct[]
  productCategory: any;
  id: any = this.routes.snapshot.params['id']
  errorMsg: string

  initCategoryForm() {

    this.categoryForm = this.fb.group({
      //id: [this.category.id],
      name: [this.category.name, Validators.required],
      description: [this.category.description],
      status: [this.category.isActive]

    });
    console.log(this.categoryForm)

  }
  getCategory(categoryId: any) {
    this.http.getCategories(this.id).subscribe(data => {
      this.category = data
      this.initCategoryForm()

    });

  }
  submitForm() {
    this.updateProduct()

  }
  updateProduct() {
    this.categoryBuilder();
    this.http.putCategory(this.category).subscribe(data => {
      console.log(data)
    }, error => this.errorMsg = error)
  }

  categoryBuilder() {

    const formValues = Object.assign({}, this.categoryForm.value);

    this.category = {
      id: this.category.id,
      name: formValues['name'],
      description: formValues['description'],
      isActive: formValues['status']
    }
  }

  getProduct(categoryId: number){
    this.productServices.getProducts().subscribe(data => this.products = data);
    this.http.getProductsByCategory(categoryId).subscribe(data => this.productCategory = data);
  }
}
