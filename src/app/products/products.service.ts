import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = "https://localhost:5001/api/products";
  constructor(private http: HttpClient) { }
  getProducts(id = '') : Observable<any>{
    return this.http.get(this.url+`/${id}`).pipe(catchError(this.errorHandler))
    
  }

  
  postProduct(product : IProduct) {
    return this.http.post<IProduct>(this.url,product ).pipe(catchError(this.errorHandler))
  }

  putProduct(product: IProduct) : Observable<IProduct>{
    return this.http.put<IProduct>(this.url+`/${product.id}`,product).pipe(catchError(this.errorHandler))
  }
  deleteProduct(id: number){
    return this.http.delete<IProduct>(this.url+`/${id}`).pipe(catchError(this.errorHandler))
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }


}
