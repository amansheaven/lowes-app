import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../api/loading.service';
import { StorageService } from 'src/app/api/storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})



export class NavigationPage implements OnInit {
  dispitem:{};
  route;

  constructor( private loader: LoadingService, private serve:StorageService ) {
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
    this.serve.generateroute();
  }

}
