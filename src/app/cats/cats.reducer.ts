import { CatsActionTypes, CatsActions } from './cats.actions';

export interface State {
  'cats': [
    {
      'catName': string,
      'catColor': string,
      'catHabits': string,
      'catOwner': string
    }
  ]
}

export const initialState: State = {
  'cats': [
    {
      'catName': 'Piter',
      'catColor': 'brown',
      'catHabits': 'lazy',
      'catOwner': '',
    }
  ]
};

const newState = (state, newData) => Object.assign({}, state, newData);


export function catsReducer(state = initialState, action: CatsActions): State {
  switch (action.type) {

    // get all cats
    case CatsActionTypes.LOAD_CAT:
      return state;

    case CatsActionTypes.LOAD_CAT_SUCCESS:
      return newState(state, action.payload);

    case CatsActionTypes.LOAD_CATS_ERROR:
      return newState(state, action.payload);
      // TODO error handler

    // insert cat
    case CatsActionTypes.ADD_CAT:
      return state;

    case CatsActionTypes.ADD_CAT_SUCCESS:
      return newState(state, action.payload);

    case CatsActionTypes.ADD_CATS_ERROR:
      return newState(state, action.payload);
    // TODO error handler

    // remove cat
    case CatsActionTypes.REMOVE_CAT:
      return state;

    case CatsActionTypes.REMOVE_CAT_SUCCESS:
      console.log(action);
      return newState(state, action.payload);

    case CatsActionTypes.REMOVE_CAT_ERROR:
      return newState(state, action.payload);
    // TODO error handler


    // default
    default:
      return state;
  }
}

