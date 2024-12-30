import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './types/products';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  httpClient = inject(HttpClient);
  constructor() {}
  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }
  getProductsById(id: number) {
    console.log(typeof id);
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }
  addProduct(product: Product) {
    return this.httpClient.post<Product>(
      'http://localhost:3000/products',
      product
    );
  }
  updateProduct(product: Product) {
    return this.httpClient.put<Product>(
      'http://localhost:3000/products/' + product.id,
      product
    );
  }
  deleteProduct(id: number) {
    return this.httpClient.delete<Product>(
      'http://localhost:3000/products/' + id
    );
  }
}
