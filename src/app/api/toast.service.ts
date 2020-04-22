import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(message: string) {
    return await this.toastController.create({
      message: message,
      duration: 2000
    });
  }


}
