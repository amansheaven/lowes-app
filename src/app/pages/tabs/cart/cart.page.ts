import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  user = {};
  constructor(private nativeStorage:NativeStorage) {
   }

  ngOnInit() {
    this.nativeStorage.getItem('user').then(
      res => this.user = res ,
      error => console.error(error)
    );
  }

}
