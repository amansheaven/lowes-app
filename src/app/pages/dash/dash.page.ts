import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/api/toast.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {
  store = {};
  constructor(private toast: ToastService, private data: NativeStorage) { }

  async ngOnInit() {
    await this.data.getItem("store").then(res => this.store= res);
    await console.log(this.store);
    await this.toast.presentToast("Welcome to "+this.store['name']+", "+this.store['city']+".").then(res => res.present());
  }

}
