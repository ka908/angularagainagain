import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-search',
  imports: [MatInputModule, MatButtonModule, FormsModule, RouterLink],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  @Output() searchProduct = new EventEmitter<string>();
  search() {
    console.log('Search Product');
    this.searchProduct.emit(this.text);
  }
  text = '';
}
