import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../api/loading.service';
import { StorageService } from 'src/app/api/storage.service';
import { ToastService } from 'src/app/api/toast.service';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/api/alert.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})



export class NavigationPage implements OnInit {
  dispitem:{};
  route;
  isNext = true;

  constructor( private loader: LoadingService, private serve:StorageService, private toast:ToastService, private router: NavController, private alert: AlertService ) {
    // this.serve.savedata();
    // console.log(this.serve.get_route());
  }
  
  ngOnInit(){
    this.serve.current_pro.subscribe((res)=>this.dispitem=res);
    this.serve.route.subscribe((res)=>this.route=res);
  }
  ionViewDidEnter(){
  }

  onClick(){
    if(this.serve.flatmap.length){
      this.serve.generateroute();
      console.log("value :: ", this.serve.current_pro.value.col)
      if(this.serve.current_pro.value.col % 2) {this.alert.offerAlert()};
    }else{
      this.isNext = !this.isNext;
      this.toast.presentToast("List Completed").then((res)=>res.present());
    }
  }

  onClickBack(){
    this.router.navigateBack('/dash/cart');
  }

}
