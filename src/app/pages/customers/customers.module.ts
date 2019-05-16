import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersCreateEditComponent } from './customers-create-edit/customers-create-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [CustomersCreateEditComponent, CustomersListComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
