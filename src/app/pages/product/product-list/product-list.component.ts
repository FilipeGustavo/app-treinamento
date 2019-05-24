import { Component, OnInit } from '@angular/core';
import { ProductService } from '@shared/service/product.service';
import { Product } from '@shared/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  constructor(private service: ProductService) { }

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'expirationDate', 'category', 'acoes'];
  dataSource: Product[];

  ngOnInit() {
    this.service.findAll().subscribe(
     res => {
       this.dataSource = res;
       console.log(res);
      }
    ), err => {
      console.log(err);
    }
  }

  obj: Product[];

  delete(id: number){

    //const index = this.dataSource.indexOf(x => x.id == id);
    //this.dataSource.splice(index, 1);

    this.service.delete(id).subscribe(
      res => {
        console.log(res)
        this.ngOnInit();
      }
    ), err => {
       console.log(err)
    }
  }
}
