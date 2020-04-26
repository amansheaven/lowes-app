import { Injectable, Query } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';



@Injectable({
  providedIn: 'root'
})

export class MainService {
  // private query: QueryRef<any>;
  constructor(private apollo: Apollo, private nativeStorage:NativeStorage) {
    //clearing localstorage at init:
  }
  //pseudo-login fn
  async login(username: string){
    await this.nativeStorage.clear().then( () => console.log("Clearing all data res:: "), error => console.error("Error Clearing", error));
    await this.apollo.query<any>({
      query: gql`
      query geoUser($lat:Float,$long:Float, $uname: String!){
        geoStore(latitude:$lat, longitude:$long){
          storeid
          name
          city
        },
        getUser(username:$uname){
          username
          cart
          image
        }
      }       
      `,
      variables: {
        "lat": 25.2,
        "long": 22.3,
        "uname":username
      }
    })
    .pipe(
        map(result => result.data)
    )
    .toPromise()
    .then(res=>{
      console.log("Got User and Stores");
      this.nativeStorage.setItem('store',res.geoStore).then(res => console.log("Saved store data"));
      this.nativeStorage.setItem('user', res.getUser).then(res => console.log("Saved user data"));
      return true;
    })
    .catch(err => {
        console.log("Failed fetching User and Stores :: ", err);
        return false;
    });
  }


  async saveCart(){
    var cartlist = await this.nativeStorage.getItem('user');
    cartlist = cartlist.cart;
    console.log("Calling with ", cartlist);
    return await this.apollo.query<any>({
        query: gql`
        query cart($array:[Int]!) {
          getProductBatch(pidarray:$array){
            name
            row
            col
            img
            tag
            weight
          }
        }      
        `,
        variables: {
          "array": cartlist
        }
      })
      .pipe(
          map(result => result.data.getProductBatch)
      )
      .toPromise()
      .then(res=>{
        console.log("Got cart item details");
        this.nativeStorage.setItem('cartdetails',res).then(res => console.log("Saved store data :: ", res));
        return Promise;
      })
      .catch(err => {
          console.log("Failed fetching User and Stores :: ", err);
          return Promise;
      });
    
  }

}
