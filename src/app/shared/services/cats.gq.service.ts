import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
     catsOwners {
       name
       email
       phone
     }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class CatsGqService {
  i = 0;

  constructor(private apollo: Apollo) {
  }

  getAllCatsGql() {
    return this.apollo.watchQuery<any>({ query: CurrentUserForProfile }).valueChanges;
  }
}
