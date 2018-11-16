import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '@env/environment';
import { RouterStateUrl } from './router/router.interface';
import { AuthorizationReducer } from '../authorization/authorization.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  authorization: any;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  authorization: AuthorizationReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
