import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
     cats_owners {
       hairColor
       email
     }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class CatsGqService {

  constructor(private apollo: Apollo) { }

  getAllCatsGql() {
    return this.apollo.watchQuery<any>({ query: CurrentUserForProfile }).valueChanges;
  }
}
