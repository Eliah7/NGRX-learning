import { createAction, props } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';
import * as fromEnums from '../enums';

// export class LoadPizzas implements Action {
//   readonly type = fromEnums.LOAD_PIZZAS;
//   constructor(public payload?: any) {}
// }

// export class LoadPizzasSuccess implements Action {
//   readonly type = fromEnums.LOAD_PIZZAS_SUCCESS;
//   constructor(public payload: Pizza[]) {}
// }

// export class LoadPizzasFail implements Action {
//   readonly type = fromEnums.LOAD_PIZZAS_FAIL;
//   constructor(public payload: any) {}
// }

// export type PizzaAction = LoadPizzas | LoadPizzasSuccess | LoadPizzasFail;

export const LoadPizzas = createAction(fromEnums.LOAD_PIZZAS);

export const LoadPizzasSuccess = createAction(
  fromEnums.LOAD_PIZZAS_SUCCESS,
  props<{ pizzas: Pizza[] }>()
);

export const LoadPizzasFail = createAction(
  fromEnums.LOAD_PIZZAS_FAIL,
  props<{ error?: any }>()
);
