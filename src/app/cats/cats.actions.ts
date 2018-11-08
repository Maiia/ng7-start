import { Action } from '@ngrx/store';

export enum CatsActionTypes {
  LOAD_CAT = '[Cats] Load Cats',
  LOAD_CAT_SUCCESS = '[Cats] Load Cats Success',
  LOAD_CATS_ERROR= '[Cats] Load Cats Fail',
  ADD_CAT = '[Cats] Add Cat',
  ADD_CAT_SUCCESS = '[Cats] Add Cat Success',
  ADD_CATS_ERROR = '[Cats] Add Cat Fail',
  REMOVE_CAT = '[Cats] Remove Cat',
  REMOVE_CAT_SUCCESS = '[Cats] Remove Cat Success',
  REMOVE_CAT_ERROR = '[Cats] Remove Cat Fail'
}

// GET ALL CATS
export class LoadCats implements Action {
  readonly type = CatsActionTypes.LOAD_CAT;
}

export class LoadCatsSuccess implements Action {
  readonly type = CatsActionTypes.LOAD_CAT_SUCCESS;

  constructor( public payload: any ) { }
}

export class LoadCatsError implements Action {
  readonly type = CatsActionTypes.LOAD_CATS_ERROR;

  constructor( public payload: any ) { }
}

// ADD CAT
export class AddCat implements Action {
  readonly type = CatsActionTypes.ADD_CAT;

  constructor( public payload: any ) { }
}

export class AddCatSuccess implements Action {
  readonly type = CatsActionTypes.ADD_CAT_SUCCESS;

  constructor( public payload: any ) { }
}

export class AddCatError implements Action {
  readonly type = CatsActionTypes.ADD_CATS_ERROR;

  constructor( public payload: any ) { }
}

// REMOVE CAT
export class RemoveCat implements Action {
  readonly type = CatsActionTypes.REMOVE_CAT;

  constructor( public payload: any ) { }
}

export class RemoveCatSuccess implements Action {
  readonly type = CatsActionTypes.REMOVE_CAT_SUCCESS;

  constructor( public payload: any ) { }
}

export class RemoveCatError implements Action {
  readonly type = CatsActionTypes.REMOVE_CAT_ERROR;

  constructor( public payload: any ) { }
}


export type CatsActions =
  LoadCats
  | LoadCatsSuccess
  | LoadCatsError
  | AddCat
  | AddCatSuccess
  | AddCatError
  | RemoveCat
  | RemoveCatSuccess
  | RemoveCatError;
