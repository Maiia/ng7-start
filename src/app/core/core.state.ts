import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '@env/environment';
import { RouterStateUrl } from '../core/custom-router-state-serializer';
import { catsReducer } from '../cats/cats.reducer';
import { catsOwnersReducer } from '../cats/cats-owners-store/cats-owners.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  catsState: any;
  catsOwnersState: any;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  catsState: catsReducer,
  catsOwnersState: catsOwnersReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

