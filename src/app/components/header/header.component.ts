import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterLink],
  template: `<mat-toolbar color="primary">
    <button mat-icon-button routerLink="/products">
      <mat-icon>home</mat-icon>
    </button>
    <span>My App</span>
  </mat-toolbar> `,
  styles: ``,
})
export class HeaderComponent {}
