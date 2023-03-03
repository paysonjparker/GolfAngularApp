import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent }, 
  { path: 'create', component: CreateProductComponent }, 
  { path: 'display/:id', component: DisplayProductComponent }, 
  { path: 'delete/:id', component: DeleteProductComponent }, 
  { path: 'edit/:id', component: EditProductComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
