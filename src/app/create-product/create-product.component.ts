import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/products.model';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{

  product: Product = {
    productId: Math.floor(Math.random() * 1000000),
    name: "",
    description: "",
    brand: "",
    price: 0,
  };

  wasSubmitted: boolean = false;

  constructor(private service: ProductServiceService, private router: Router) { }

  ngOnInit() {

  }

  public onSubmit() {
    // call the Service to create the new Product
    console.log(this.product);
    let status = this.service.createProduct(this.product, () => {
      console.log("Success create a product");
    });
    console.log("The return from createProduct() was " + status);
    this.wasSubmitted = true;
    this.router.navigate(['/']);
  }
}
