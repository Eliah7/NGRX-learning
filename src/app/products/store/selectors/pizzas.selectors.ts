import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers/';
import * as fromPizzas from '../reducers/pizzas.reducers';

import { Pizza } from '../../models/pizza.model';

export const getPizzasState = createSelector(
  fromFeature.getProductState,
  (state: fromFeature.ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzasState,
  fromPizzas.getAllPizzaEntitiesFromAdapter
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);

// export const getAllPizzas = createSelector(
//     getPizzasEntities,
//     (entities) => {
//         return Object.keys(entities).map(id => entities[parseInt(id, 10)])
//     }
// )
export const getAllPizzas = createSelector(
  getPizzasState,
  fromPizzas.getAllPizzasFromAdapter
);

export const getPizzasLoading = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoading
);

export const getPizzasLoaded = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoaded
);
