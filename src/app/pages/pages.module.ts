import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [{
      path: "product",
      component: ProductComponent,
      data: {title: "Produtos"}
    }]

  }
];

@NgModule({
  declarations: [PagesComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesModule { }
