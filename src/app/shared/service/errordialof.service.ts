import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrordialogComponent } from '../component/errordialog/errordialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrordialofService {

  constructor(public dialog: MatDialog) { }

  public isDiaLogOpen: boolean = false;

  openDiaLog(data): any {
    if(this.isDiaLogOpen){
      return false;
    }
    this.isDiaLogOpen = true;
    const dialogRef = this.dialog.open(ErrordialogComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isDiaLogOpen = false;
      let animal;
      animal = result;
    });
  }
}
