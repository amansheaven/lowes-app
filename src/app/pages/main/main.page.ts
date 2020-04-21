import { Component, OnInit } from '@angular/core';
import { MainService } from '../../api/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  username: string ;

  constructor(private service : MainService) { }

  ngOnInit() {
  }
  
  async login_click(){
    await this.service.login(this.username);
    await console.log("DONE WITH SERVICE");
  }

}
