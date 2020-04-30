import { Component, OnInit } from '@angular/core';
import { NfcService } from 'src/app/api/nfc.service';
import { MainService } from 'src/app/api/main.service';
import { LoadingService } from 'src/app/api/loading.service';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.page.html',
  styleUrls: ['./productcard.page.scss'],
})
export class ProductcardPage implements OnInit {
  card;
  constructor(private service: NfcService, private api: MainService, private loader: LoadingService) { }
  initalize(){
    this.loader.loadingPresent();
    this.api.getProduct(this.service.id).then((res)=>{
      console.log("Finally got product", res);
      this.card = res;
      // this.ref.detectChanges();
      this.loader.loadingDismiss();
    })
  }
  ngOnInit() {
    this.initalize()
  }

  ionViewWillEnter(){
    console.log(this.card)
  }
}
