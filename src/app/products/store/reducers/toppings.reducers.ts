import { Topping } from '../../models/topping.model';

import * as toppingsActions from '../actions/toppings.actions';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loading: boolean;
  loaded: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state: ToppingsState = initialState,
  action: toppingsActions.ToppingAction
) {
  switch (action.type) {
    case toppingsActions.LOAD_TOPPING: {
      return {
        ...state,
        loading: true,
      };
    }

    case toppingsActions.LOAD_TOPPING_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping) => {
          return {
            ...entities,
            [topping.id]: topping,
          };
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case toppingsActions.LOAD_TOPPING_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default:
      return state;
  }
}

export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsEntities = (state: ToppingsState) => state.entities;
