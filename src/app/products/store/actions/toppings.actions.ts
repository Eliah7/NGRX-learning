import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

export const LOAD_TOPPING = '[Products] Load Topping';
export const LOAD_TOPPING_SUCCESS = '[Products] Load Topping Success';
export const LOAD_TOPPING_FAIL = '[Products] Load Topping Fail';

export class LoadTopping implements Action {
  type = LOAD_TOPPING;
  constructor(public payload?: any) {}
}

export class LoadToppingSuccess implements Action {
  type = LOAD_TOPPING_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class LoadToppingFail implements Action {
  type = LOAD_TOPPING_FAIL;
  constructor(public payload: any) {}
}

export type ToppingAction = LoadTopping | LoadToppingFail | LoadToppingSuccess;
