import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/products.model';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  @Input() product: Product;
  
  constructor(private service: ProductServiceService, private router: Router) { }

  ngOnInit() {
    let status = this.service.deleteProduct(this.product.productId, () => {
      console.log("Success create a product");
    });
    // this.router.navigate(['/']);
  }
}
