import { Injectable } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { MainService } from './main.service';
import { mergeMap, map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class NfcService {
  // nfcobj;
  retults;
  id = 1;
  constructor(private nfc: NFC, private ndef: Ndef, private service: MainService, private nav: NavController) {

  }

  startRead() {
    return this.nfc.addNdefListener(
      () => console.log("Reading"),
      (err) => {
        console.log("Cannot Attach Listened : ", err);
      }
    ).pipe(map((res)=>{
      var content = this.nfc.bytesToString(res.tag.ndefMessage[0].payload).substr(3);
      // this.id = content;
      // let results = this.service.getProduct(content)
      // console.log("Returning product :: " results);
      // this.indes = content;
      return content;
    }))
    .subscribe((res)=>{
      this.id = parseInt(res);
      // this.getProduct()
      this.nav.navigateForward('/productcard');
    })
  }


}
