import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducers';
import * as fromToppings from './toppings.reducers';
import * as fromStates from '../state';

export interface ProductState {
  pizzas: fromStates.PizzaEntityState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.pizzaReducer,
  toppings: fromToppings.reducer,
};

export const getProductState = createFeatureSelector<ProductState>('products');
