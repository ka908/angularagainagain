import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/products';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-product',
  imports: [MatInputModule, CommonModule, MatButtonModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss',
})
export class DeleteProductComponent {}
