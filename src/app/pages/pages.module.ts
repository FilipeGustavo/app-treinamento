import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [PagesComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
