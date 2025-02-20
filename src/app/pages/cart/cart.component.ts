import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>

      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />
      }

      @if (cartService.cart.length < 1) {
        <h3>There is no item in your cart!</h3>
      } @else {
        <app-order-summary />
      }
    </div>
  `,
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
}