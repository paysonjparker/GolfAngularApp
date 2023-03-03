import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private host = "http://localhost:3000";

  constructor(private http: HttpClient) { 

  }

  public getProducts(callback: (products: Product[]) => void): void {
    this.http.get<Product[]>(this.host + "/products").
      subscribe((products: Product[]) => {
        callback(products);
      });
  }

  public createProduct(product: Product, callback:() => void): void {
    this.http.post<Product>(this.host + "/products", product).
      subscribe((data) => {
        callback();
      });
  }

  public updateProduct(product: Product, callback: () => void): void {
    this.http.put<Product>(this.host + "/products", product).
      subscribe((data) => {
        callback();
      });
  }

  public deleteProduct(productId: number, callback: () => void): void {
    this.http.delete(this.host + "/products/" + productId).
      subscribe((data) => {
        callback();
      });
  }
}
