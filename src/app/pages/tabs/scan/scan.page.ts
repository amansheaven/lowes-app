import { Component, OnInit } from '@angular/core';
import { NfcService } from 'src/app/api/nfc.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  nfctempobj;
  // disp;
  constructor(private nfc : NfcService, private router: NavController) {
    // this.disp = this.nfc.nfcobj
    // this.nfctempobj = nfc.startRead();
    
   }

  ngOnInit() {}
  // start(){
    // return this.nfctempobj.toPromise();
    // .subscribe((res)=>{
    //   console.log("got it  :: ", res);
    //   // this.nfc.getProduct()
    // })
  // }
  ionViewWillEnter(){
    this.nfc.startRead()
  }

  // ionViewDidLeave(){
  //   this.nfc.
  //   this.nfc.nfcobj.unsubscribe();
  // }

}
