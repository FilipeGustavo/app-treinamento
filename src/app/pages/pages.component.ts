import { Component, OnInit } from '@angular/core';
import { GenericService } from '@shared/service/generic.service';
import { Product } from '@shared/domain/product.model';
import { BaseModel } from '@shared/domain/base.model';
import { Category } from '@shared/domain/category';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
