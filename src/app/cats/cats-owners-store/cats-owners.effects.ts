import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CatsOwnersGqlActionTypes } from './cats-owners.actions';
import * as CatsOwnersGqlActions from './cats-owners.actions';

import { CatsGqService } from '../../shared/services/cats.gq.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CatsOwnersEffects {

  constructor(
    private actions$: Actions,
    private catsGqlService$: CatsGqService
  ) {}

  @Effect()
  allCats = () => {
    return this.actions$.pipe(
      ofType<CatsOwnersGqlActions.LoadCatsOwnersGql>(CatsOwnersGqlActionTypes.LOAD_CATS_OWNERS_GQL),
      switchMap((action: CatsOwnersGqlActions.LoadCatsOwnersGql) =>
        this.catsGqlService$.getAllCatsGql().pipe(
          map(stock => {
            console.log('arr1?', stock['data']);
            return new CatsOwnersGqlActions.LoadCatsOwnersGqlSuccess(stock['data'])}
          ),
          catchError(error => of(new CatsOwnersGqlActions.LoadCatsOwnersGqlError({ error })))
        )
      )
    )
  };
}
