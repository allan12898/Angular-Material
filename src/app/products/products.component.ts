import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  addProduct(): void {
    this.route.navigate(['products/add'])
  };
  editProduct(product : any){
    this.route.navigate([`products/edit/${product.id}`])
  }

  displayedColumns: string[] = ['id', 'name', 'description','status', 'action'];
  dataSource = [
    {id: 1, name: 'Hydrogen', description: 1.0079},
    {id: 1, name: 'Hydrogen', description: 1.0079},
    {id: 1, name: 'Hydrogen', description: 1.0079},
    {id: 1, name: 'Hydrogen', description: 1.0079},
    {id: 1, name: 'Hydrogen', description: 1.0079},
    {id: 1, name: 'Hydrogen', description: 1.0079},
    {id: 1, name: 'Hydrogen', description: 1.0079},
    {id: 1, name: 'Hydrogen', description: 1.0079},
  ]


}
