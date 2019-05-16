import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: "product",
    component: ProductComponent,
    data: {title: "Produtos"}

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
