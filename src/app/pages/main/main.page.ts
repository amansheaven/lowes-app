import { Component, OnInit } from '@angular/core';
import { MainService } from '../../api/main.service';
import { LoadingService } from '../../api/loading.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  username = "aman" ;

  constructor(private service : MainService, private loading : LoadingService ) { }

  ngOnInit() {
  }

  async login_click(){
    await this.loading.loadingPresent();
    await this.service.login(this.username).then(()=>{
      this.loading.loadingDismiss();
    }
    );
  }

}
