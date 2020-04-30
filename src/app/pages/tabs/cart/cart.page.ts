import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MainService } from '../../../api/main.service';
import { LoadingService } from '../../../api/loading.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart = [];

  constructor(private nativeStorage:NativeStorage, private service: MainService, private loader: LoadingService, private change: ChangeDetectorRef) {
   }

   async loadandfetch(){
    await this.loader.loadingPresent();
    await this.service.saveCart()
    .then(
      (res)=>{
        this.loader.loadingDismiss();
        this.nativeStorage.getItem('cartdetails').then(
          res =>  {this.cart=res, this.change.detectChanges()},
          error => console.error(error)
        );
      }
    ).catch(
      (err)=>console.log("Error :: ", err)
    )
   }

  ngOnInit() {
    this.loadandfetch()
  }

}
