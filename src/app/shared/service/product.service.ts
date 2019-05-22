import { Injectable, Injector } from '@angular/core';
import { GenericService } from './generic.service';
import { Product } from '@shared/domain/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product>{

  constructor(private injector: Injector) {
    super(injector, "http://www.mocky.io/v2/5cdc569c2d00008415f5a71c");
   }


}
