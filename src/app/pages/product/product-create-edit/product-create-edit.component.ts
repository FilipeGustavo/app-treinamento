import { Component, OnInit, Input, ViewChild, ElementRef, Directive, HostListener } from '@angular/core';
import { ProductService } from '@shared/service/product.service';
import { FormGroup, FormBuilder, NgForm, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrordialofService } from '@shared/service/errordialof.service';

interface IAlert {
  hide?: boolean,
  message: string,
  timeout?: number,
  type: string,
  icon: string
}

@Component({
  selector: 'app-product-create-edit',
  templateUrl: './product-create-edit.component.html',
  styleUrls: ['./product-create-edit.component.scss']
})

export class ProductCreateEditComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef
  createEditProdutoFormGroup: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private service: ProductService, private formBuilder: FormBuilder, public dialog: MatDialog, private serviceError: ErrordialofService) { }

  public alert: IAlert = {
    message: "Incluído com secesso!",
    type: "success",
    hide: true,
    icon: "done"
  }

  id: string = this.route.snapshot.queryParams['id'];

  newProduct: boolean = true ? !this.id : false;

  ngOnInit() {
    this.createEditProdutoFormGroup = this.formBuilder.group({
      'id': [null],
      'name': [null],
      'description': [null],
      'price': [null],
      'expirationDate': [null],
      'category': [null]
    });

    if (this.id) {
      this.editProduct(this.id)
    }
  }

  saveProduct(form: NgForm) {
    if (form.value.id !== null && form.value.id !== 0) {
      this.alert.message = 'Alterações realizado com sucesso';
    }
    this.service.save(form.value).subscribe(
      res => {
        console.log(form);
        console.log(res);
         // Voltar e concluir modal.
        // this.dialog.open(ModalComponent);
        this.serviceError.openDiaLog(res);
        this.alert.hide = !this.alert.hide;
        setTimeout(() => this.router.navigate(['/product']), 2000);
      }, (err) => {
        console.log(err);
      }
    )
  }

  editProduct(id) {
    this.service.find(id).subscribe(data => {
      this.createEditProdutoFormGroup.setValue({
        id: data.id,
        name: data.name,
        description: data.description,
        price: data.price,
        expirationDate: data.expirationDate,
        category: data.category
      });
      console.log(data);
    }
    )

  }
}