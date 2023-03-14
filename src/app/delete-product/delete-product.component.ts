import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/products.model';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  @Input() product: Product;
  pId: number;
  
  constructor(private service: ProductServiceService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => 
      {
        console.log(params);
      });
  }

  ngOnInit() {
    var url_string = window.location.href;
    console.log(url_string);
    var url = new URL(url_string);
    var productId = url.pathname.toString();
    productId = productId.substring((productId.length - 2), productId.length);
    console.log(productId);
   
    let status = this.service.deleteProduct(parseInt(productId), () => {
      console.log("Success delete a product");
    });

    this.route.queryParams.subscribe(params => {
      this.pId = params['id'];
    });

    this.router.navigate(['/']);
  }
}
