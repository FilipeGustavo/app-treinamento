import { Component, OnInit } from '@angular/core';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.findAll().subscribe(
      res => console.log(res)
    )
  }

}
