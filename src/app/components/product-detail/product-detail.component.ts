import { Component, inject } from '@angular/core';
import { Product } from '../../types/products';
import { MatCardModule } from '@angular/material/card';
import { ProductServiceService } from '../../product-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [MatCardModule, MatButtonModule, RouterLink, LowerCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productService = inject(ProductServiceService);
  activatedRoute = inject(ActivatedRoute);
  product!: Product;
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductsById(id).subscribe((Product) => {
      this.product = Product;
    });
  }
}
