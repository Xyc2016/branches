import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponentComponent implements OnInit {
  shippingCosts = this.cartService.getShoppingPrices();
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
