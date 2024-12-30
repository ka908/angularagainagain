import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/products';
import { ProductServiceService } from '../../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent {
  productService = inject(ProductServiceService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  toasterService = inject(ToastrService);

  formBuilder = inject(FormBuilder);
  productForm = this.formBuilder.group({
    id: [0],
    title: ['', [Validators.required]],
    imgUrl: '',
    price: [0],
    rating: [0],
    properties: [''],
  });
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductsById(id).subscribe((result: any) => {
      this.productForm.patchValue(result);
    });
  }
  editProduct() {
    if (this.productForm.invalid) {
      this.toasterService.error('provide required fields');
      return;
    }
    const formData = this.productForm.value;
    const data: Product = {
      id: formData.id || 0,
      title: formData.title ?? '',
      imgUrl: formData.imgUrl ?? '',
      price: formData.price ?? 0,
      rating: formData.rating ?? 0,
      // properties: (formData.properties as string[]) ?? [],
    };
    this.productService.updateProduct(data).subscribe((res) => {
      // console.log('Product Updated', res);
      this.toasterService.success('Product Updated');
      this.router.navigateByUrl('/');
    });
  }
}
