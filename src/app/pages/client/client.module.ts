import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateEditComponent } from './client-create-edit/client-create-edit.component';
import { ClientListComponent } from './client-list/client-list.component';

@NgModule({
  declarations: [ClientCreateEditComponent, ClientListComponent],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
