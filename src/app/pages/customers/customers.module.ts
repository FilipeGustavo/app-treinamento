import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersCreateEditComponent } from './customers-create-edit/customers-create-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "customers/create", component: CustomersCreateEditComponent },
  { path: "customers/edit", component: CustomersCreateEditComponent },
  { path: "customers", component: CustomersListComponent }
];

@NgModule({
  declarations: [CustomersCreateEditComponent, CustomersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  
})
export class CustomersModule { }
