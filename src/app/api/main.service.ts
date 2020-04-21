import { Injectable, Query } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class MainService {
  store = {};
  user = {};
  // private query: QueryRef<any>;
  constructor(private apollo: Apollo) {}
  //pseudo-login fn
  async login(username: string){
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
      this.store = res.geoStore;
      this.user = res.getUser;
      return true;
    })
    .catch(err => {
        console.log("Failed fetching User and Stores :: ", err);
        return false;
    });
  }
}
