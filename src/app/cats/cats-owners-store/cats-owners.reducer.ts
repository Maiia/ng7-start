import { CatsOwnersGqlActionTypes, CatsOwnersGqlActions } from './cats-owners.actions';

export interface State {

}

export const initialState: State = {

};

console.log("'I'm reduces");
const newState = (state, newData) => Object.assign({}, state, newData);

export function catsOwnersReducer(state = initialState, action: CatsOwnersGqlActions): State {
  switch (action.type) {

    case CatsOwnersGqlActionTypes.LOAD_CATS_OWNERS_GQL:
      console.log("Reducer LOAD_CATS_OWNERS_GQL");
      return state;

    case CatsOwnersGqlActionTypes.LOAD_CATS_OWNERS_GQL_SUCCESS:
      console.log("Reducer LOAD_CATS_OWNERS_GQL_SUCCESS");
      return newState(state, action.payload);

    case CatsOwnersGqlActionTypes.LOAD_CATS_OWNERS_GQL_ERROR:
      return newState(state, action.payload);


    default:
      return state;
  }
}
