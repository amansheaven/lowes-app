import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  async offerAlert() {
    const alert = await this.alertController.create({
      header: 'COVID Bonaza',
      // subHeader: 'COVID Bonaza',
      message: "Hey, you've eyed this product a lot, with a 15% discount and take it home ;)",
      buttons: ['Nah!','YAAS!']
    });

    await alert.present();
  }

  async doalert(_header, _subHeader, _message) {
    const alert = await this.alertController.create({
      header: _header,
      subHeader: _subHeader,
      message: _message,
      buttons: ['OK','Cancel']
    });

    await alert.present();
  }
}
