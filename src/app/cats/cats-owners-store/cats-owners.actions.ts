import { Action } from '@ngrx/store';

export enum CatsOwnersGqlActionTypes {
  LOAD_CATS_OWNERS_GQL = '[CatsOwners] Load CatsOwners gql',
  LOAD_CATS_OWNERS_GQL_SUCCESS = '[CatsOwners] Load CatsOwners gql Success',
  LOAD_CATS_OWNERS_GQL_ERROR = '[CatsOwners] Load CatsOwners gql Fail',
  ADD_CATS_OWNERS_GQL = '[CatsOwners] Add CatsOwners gql',
  ADD_CATS_OWNERS_GQL_SUCCESS = '[CatsOwners] Add CatsOwners gql Success',
  ADD_CATS_OWNERS_GQL_ERROR = '[CatsOwners] Add CatsOwners gql Fail',
}

console.log("'I'm action");
// GET ALL CATS OWNERS GQL
export class LoadCatsOwnersGql implements Action {
  readonly type = CatsOwnersGqlActionTypes.LOAD_CATS_OWNERS_GQL;
}

export class LoadCatsOwnersGqlSuccess implements Action {
  readonly type = CatsOwnersGqlActionTypes.LOAD_CATS_OWNERS_GQL_SUCCESS;

  constructor( public payload: any ) { }
}

export class LoadCatsOwnersGqlError implements Action {
  readonly type = CatsOwnersGqlActionTypes.LOAD_CATS_OWNERS_GQL_ERROR;

  constructor( public payload: any ) { }
}


// ADD CATS OWNER GQL
export class AddCatsOwnersGql implements Action {
  readonly type = CatsOwnersGqlActionTypes.ADD_CATS_OWNERS_GQL;
}

export class AddCatsOwnersGqlSuccess implements Action {
  readonly type = CatsOwnersGqlActionTypes.ADD_CATS_OWNERS_GQL_SUCCESS;

  constructor( public payload: any ) { }
}

export class AddCatsOwnersGqlError implements Action {
  readonly type = CatsOwnersGqlActionTypes.ADD_CATS_OWNERS_GQL_ERROR;

  constructor( public payload: any ) { }
}

export type CatsOwnersGqlActions =
  LoadCatsOwnersGql
  | LoadCatsOwnersGqlSuccess
  | LoadCatsOwnersGqlError
  | AddCatsOwnersGql
  | AddCatsOwnersGqlSuccess
  | AddCatsOwnersGqlError;
