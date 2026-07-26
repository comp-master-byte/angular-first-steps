import { Component, signal } from '@angular/core';
import { ProductsService } from '../../services/ProductsService';
import { ModalService } from '../../services/modal';
import { CreateProduct } from '../../components/create-product/create-product';
import { Modal } from '../../ui/modal/modal';
import { ProductComponent } from '../../components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductsPipe } from '../../pipes/filter-products-pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-page',
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    CommonModule,
    FormsModule,
    FilterProductsPipe,
    HttpClientModule,
    // Список подключенных компонентов
    ProductComponent,
    Modal,
    CreateProduct,
  ],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage {
  protected readonly title = signal('karen-angular-14');
  protected readonly simpleTitle = 'Angular first steps';
  search = '';
  isLoading = signal(false);
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.isLoading.set(true);
    this.productsService.getAllProducts().subscribe(() => {
      this.isLoading.set(false);
    });
  }
}
