import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product" />
      }
    </div>
  `,
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      price: 110,
      image: 'https://fakeimg.pl/250x100/',
      stock: 10
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet.',
      price: 22,
      image: 'https://fakeimg.pl/250x100/',
      stock: 0
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet.',
      price: 55,
      image: 'https://fakeimg.pl/250x100/',
      stock: 10
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet.',
      price: 110,
      image: 'https://fakeimg.pl/250x100/',
      stock: 10
    },
  ]);
}
