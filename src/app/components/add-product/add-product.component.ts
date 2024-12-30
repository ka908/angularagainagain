import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/products';
import { ProductServiceService } from '../../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [MatButtonModule, FormsModule, MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  productService = inject(ProductServiceService);
  router = inject(Router);
  product: Product = {
    // id: 0,
    title: '',
    imgUrl: '',
    price: 0,
    rating: 0,
    properties: [],
  };
  addProduct() {
    this.productService.addProduct(this.product).subscribe((res) => {
      console.log('Product Added', res);
      alert('Product Added');
      this.router.navigateByUrl('/');
    });
  }
}
