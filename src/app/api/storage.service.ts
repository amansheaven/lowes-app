import { Injectable} from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { getmap, direction } from './algo';
import { BehaviorSubject } from 'rxjs';

interface cart_data{
  name:string,
  row:number,
  col:number,
  img:string,
  tag:string,
  weight:number,
  __typename:string,
}

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  cart:[cart_data];
  flatmap;
  current_tobe;
  prevpoints = {
    row:1,
    col:1
  }
  current_pro = new BehaviorSubject({    //Default
    "name": "Default Product",
    "row": 1,
    "col": 1,
    "img": "https://www.primeabgb.com/wp-content/uploads/2019/02/Corsair-8GB-DDR4-CMK8GX4M1D3000C16-3000MHz-RAM-300x300.jpg",
    "tag": "RAM",
    "weight": 100,
  });
  route = new BehaviorSubject({
    "left":5,
    "top":20,
    "right":10
  });
  constructor(private storage: NativeStorage) { 
      this.savedata();
      this.createroute();
  }
  
  savedata(){
    this.storage.getItem('cartdetails').then(
      res => {
        this.cart =  res;
        var cartmod:[cart_data] = res;
        this.cart = cartmod;
        this.flatmap = getmap(this.cart);
        // return new Promise(resolve=>{
        //   resolve(this.cart);
        // })
      }
    ).finally(()=>{
      console.log("FINALLT DOING GET CURR");
      this.getcurr()
    })
  }

  getcurr(){
    this.current_pro.next(this.flatmap.shift());
    console.log("get data complete");
  }
  
  createroute(){
    let topoint = {
      row : this.current_pro.value.row,
      col : this.current_pro.value.col
    }
    this.route.next(direction(topoint,this.prevpoints));
    this.prevpoints = topoint;
    console.log("final route to be: ",this.route.value);
  }

  generateroute(){
    this.getcurr();
    let topoint = {
      row : this.current_pro.value.row,
      col : this.current_pro.value.col
    }
    this.route.next(direction(topoint,this.prevpoints));
    this.prevpoints = topoint;
    console.log("final route to be: ",this.route.value);
  }


}
