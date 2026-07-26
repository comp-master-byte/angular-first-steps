import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FocusDirective } from '../../directives/focus';
import { ProductsService } from '../../services/ProductsService';
import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-create-product',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FocusDirective,
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
})
export class CreateProduct {
  constructor(
    private productService: ProductsService,
    private modalService: ModalService,
  ) {}

  form = new FormGroup({
    title: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(5)
      ]
    })
  })

  get titleError() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 15,
      category: "dress",
      description: "lorem ipsum dorem",
      image: "http://i.pravatar.cc",
      rating: {
        count: 1,
        rate: 5,
      }
    }).subscribe(() => {
      this.modalService.close();
    })
  }
}
