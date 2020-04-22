import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../api/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart = [];
  constructor(private main: MainService) {
    console.log(main.user, main.store)
    this.cart = main.user['cart']
   }

  ngOnInit() {
  }

}
