import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CategoriesService } from './categories.service';
import { ICategory } from './icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {

  constructor(private http: CategoriesService, private route: Router) { }

  ngOnInit() {
    this.getAllCategory();
  }

  categories: ICategory[];
  category: ICategory;
  errorMsg: string
  mode: string = "Create";


  getAllCategory(){
    this.http.getCategories().subscribe(data =>
      this.categories = data, error => this.errorMsg = error)
  }



  addCategory(): void {
    this.route.navigate(['categories/add'])
  };
  editCategory(category : any){
    this.route.navigate([`categories/edit/${category.id}`])
  }

  displayedColumns: string[] = ['id', 'name', 'description','status', 'action'];
  dataSource = this.categories

}
