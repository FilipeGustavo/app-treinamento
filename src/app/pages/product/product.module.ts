import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateEditComponent } from './product-create-edit/product-create-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "product/create", component: ProductCreateEditComponent },
  { path: "product/edit", component: ProductCreateEditComponent },
  { path: "product", component: ProductListComponent }
];

@NgModule({
  declarations: [ProductCreateEditComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
