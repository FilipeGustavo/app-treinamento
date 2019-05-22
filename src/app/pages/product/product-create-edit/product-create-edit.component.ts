import { Component, OnInit } from '@angular/core';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-product-create-edit',
  templateUrl: './product-create-edit.component.html',
  styleUrls: ['./product-create-edit.component.scss']
})
export class ProductCreateEditComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
  }

}
