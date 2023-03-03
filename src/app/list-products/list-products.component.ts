import { Component, Input } from '@angular/core';
import { Product } from '../models/products.model';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  constructor(private service: ProductServiceService) {
    
  }

  @Input() product: Product;
  products: Product[] = [];
  selectedProduct: Product | null = null;

  ngOnInit(){
    this.service.getProducts((products: Product[]) => this.products = products);
  }

  public onSelectProduct(product: Product) {    
    this.selectedProduct = product;  
  }
}
