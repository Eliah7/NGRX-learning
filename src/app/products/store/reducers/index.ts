import { 
    ActionReducerMap,
    createFeatureSelector,
    createSelector
 } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducers';

export interface ProductState{
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer,
}

export const getProductState = createFeatureSelector<ProductState>(
    'products'
)

export const getPizzasState = createSelector(
    getProductState,
    (state: ProductState) => state.pizzas
)

export const getAllPizzas = createSelector(
    getPizzasState,
    fromPizzas.getPizzas
)

export const getPizzasLoading = createSelector(
    getPizzasState,
    fromPizzas.getPizzasLoading
)

export const getPizzasLoaded = createSelector(
    getPizzasState,
    fromPizzas.getPizzasLoaded
)

