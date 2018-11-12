import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CatsActionTypes } from './cats.actions';
import * as CatsActions from './cats.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CatService } from '../shared/services/cats.service';
import { of } from 'rxjs';


@Injectable()
export class CatsEffects {

  constructor(
    private actions$: Actions,
    private catService$: CatService
  ) {}

  @Effect()
  allCats = () => {
    return this.actions$.pipe(
      ofType<CatsActions.LoadCats>(CatsActionTypes.LOAD_CAT),
      switchMap((action: CatsActions.LoadCats) =>
        this.catService$.getAllCats().pipe(
          map(stock => {
            // console.log('effect all', stock);
            return new CatsActions.LoadCatsSuccess(stock)}
          ),
          catchError(error => of(new CatsActions.LoadCatsError({ error })))
        )
      )
    )
  }


  @Effect()
  addCats = () => {
    return this.actions$.pipe(
      ofType<CatsActions.AddCat>(CatsActionTypes.ADD_CAT),
      switchMap((action: CatsActions.AddCat) =>
        this.catService$.insertCat(action.payload).pipe(
          map(stock => {
            console.log('effect add', stock);
            return new CatsActions.AddCatSuccess(stock)}
          ),
          catchError(error => of(new CatsActions.AddCatError({ error })))
        )
      )
    )
  }


  @Effect()
  removeCats = () => {
    return this.actions$.pipe(
      ofType<CatsActions.RemoveCat>(CatsActionTypes.REMOVE_CAT),
      switchMap((action: CatsActions.RemoveCat) =>
        this.catService$.updateCat(action.payload).pipe(
          map(stock => {
            console.log('effect remove', action.payload, stock);
            return new CatsActions.RemoveCatSuccess(stock)}
          ),
          catchError(error => of(new CatsActions.RemoveCatError({ error })))
        )
      )
    )
  }
}
