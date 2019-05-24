import { Injectable, Injector } from '@angular/core';
import { GenericService } from './generic.service';
import { Product } from '@shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product>{

  constructor(private injector: Injector) {
    super(injector, "/api/Produto");
   }
}
