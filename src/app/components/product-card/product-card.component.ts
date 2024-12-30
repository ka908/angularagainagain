import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/products';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../product-service.service';
@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewProduct = new EventEmitter<string>();
  router = inject(Router);
  products: Product[] = [];
  filteredProduct: any = [];
  constructor(private productService: ProductServiceService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((Product) => {
      // console.log(Product);
      this.products = Product;
      this.filteredProduct = this.products;
    });
  }
  view() {
    console.log('View Product');
    this.viewProduct.emit(this.product.id?.toString());
  }
  del(id: number) {
    console.log('delete', id);

    console.log(`API Call: http://localhost:3000/products/${id}`);
    this.productService.deleteProduct(id).subscribe((res) => {
      // console.log('Product Updated', res);
      alert('Product Deleted');
      this.router.navigateByUrl('/products');
    });
  }
}
