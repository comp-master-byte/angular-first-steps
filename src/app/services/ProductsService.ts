import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { catchError, delay, Observable, tap, throwError } from "rxjs";
import { Product } from "../models/product";
import { ErrorService } from "./ErrorService";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = signal<Product[]>([]);

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5)
    }).pipe(
      delay(200),
      tap((products) => this.products.set(products)),
      catchError(this.errorsHandler.bind(this)),
    )
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>('https://fakestoreapi.com/products', product).pipe(
      tap((product) => this.products.update(list => [...list, product]))
    );
  }

  private errorsHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}