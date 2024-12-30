import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { ProductServiceService } from '../../product-service.service';
import { Product } from '../../types/products';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductSearchComponent,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router = inject(Router);
  products: Product[] = [];
  filteredProduct: any = [];
  constructor(private productService: ProductServiceService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((Product) => {
      console.log(Product);
      this.products = Product;
      this.filteredProduct = this.products;
    });
  }
  onViewProduct(event: any) {
    console.log('On View Product', event);
    this.router.navigateByUrl('/product/' + event);
  }
  productSearch(search: string) {
    console.log('Product Search is', search);
    if (search) {
      this.filteredProduct = this.products.filter((p) => {
        return p.title.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      this.filteredProduct = this.products;
    }
  }
  del(id: number) {
    this.productService.deleteProduct(id).subscribe((res) => {
      alert('Product Deleted');
      this.router.navigateByUrl('/products');
      console.log('delete');
    });
  }
}
