import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingController: LoadingController) { }

  isLoading =  false;
  //loader Fn
  async loadingPresent() {
    this.isLoading = true;
    const loader = await this.loadingController.create({
      message: 'Please wait ...'
    });
    return loader.present().then(() => console.log('loading presented'));
  }

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }

}
