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
import { AuthorizationReducer } from '../authorization/authorization.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  AuthorizationState: any;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  AuthorizationState: AuthorizationReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
