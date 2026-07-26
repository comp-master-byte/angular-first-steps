import { Routes } from '@angular/router';
import { ProductsPage } from './pages/products-page/products-page';
import { AboutPage } from './pages/about-page/about-page';

export const routes: Routes = [
  {path: '', component: ProductsPage},
  {path: 'about', component: AboutPage}
];
