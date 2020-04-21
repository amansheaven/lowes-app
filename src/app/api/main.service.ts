import { Injectable, Query } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})

export class MainService {
  generate_login_query(username: string){
    return  gql`
    query {
      geoStore(longitude:22.3, latitude:25.2){
        storeid
        name
        city
      }
      getUser(username:"aman"){
        cart
        image
      }
    }
    `;
      
  }

  store = "";
  private query: QueryRef<any>;
  constructor(private apollo: Apollo) { }
  async login(username: string){
    console.log("username is  ", username);
    
    this.query = await this.apollo.watchQuery({
      query: this.generate_login_query(username),
      variables: {}
    });
    await console.log(this.query);
    return true;
  }
}
