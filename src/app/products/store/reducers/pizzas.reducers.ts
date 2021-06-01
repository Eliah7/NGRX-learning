import { createReducer, on } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

import * as fromActions from '../actions';
import * as fromEnums from '../enums';
import * as fromStates from '../state';
import { adapter, PizzaEntityState } from '../state';

export const pizzaReducer = createReducer(
  fromStates.initialPizzaState,
  on(fromActions.LoadPizzas, (state: PizzaEntityState) => {
    return { ...state, loading: true };
  }),
  on(fromActions.LoadPizzasSuccess, (state: PizzaEntityState, { pizzas }) => {
    const updatedState = { ...state, loading: false, loaded: true };
    return adapter.setAll(pizzas, updatedState);
  }),
  on(fromActions.LoadPizzasFail, (state: PizzaEntityState, { error }) => {
    return { ...state, loading: false, loaded: false };
  })
);
// export function reducer(
//   state = fromStates.initialState,
//   action: fromPizzas.PizzaAction
// ): fromStates.PizzaEntityState {
//   switch (action.type) {
//     case fromEnums.LOAD_PIZZAS: {
//       return {
//         ...state,
//         loading: true,
//       };
//     }

//     case fromEnums.LOAD_PIZZAS_SUCCESS: {
//       const pizzas = action.payload;
//       const entities = pizzas.reduce(
//         (entities: { [id: number]: Pizza }, pizza: Pizza) => {
//           return {
//             ...entities,
//             [pizza.id]: pizza,
//           };
//         },
//         {
//           ...state.entities,
//         }
//       );
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         entities,
//       };
//     }

//     case fromEnums.LOAD_PIZZAS_FAIL: {
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//       };
//     }
//   }
//   return state;
// }

export const getPizzasLoading = (state: fromStates.PizzaState) => state.loading;
export const getPizzasLoaded = (state: fromStates.PizzaState) => state.loaded;
export const getPizzasEntities = (state: fromStates.PizzaState) =>
  state.entities;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const getAllPizzaIds = selectIds;
export const getAllPizzaEntitiesFromAdapter = selectEntities;
export const getAllPizzasFromAdapter = selectAll;
export const getTotalNumberOfPizzas = selectTotal;
