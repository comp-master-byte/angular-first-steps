import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  imports: [
    CurrencyPipe,
    CommonModule
  ]
})
export class ProductComponent {
  @Input() product: Product
  isDetailsVisible = false;
}