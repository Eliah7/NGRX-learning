import { createSelector } from '@ngrx/store';

import { getProductState } from '../reducers';
import * as fromToppings from '../reducers/toppings.reducers';

export const getToppingsState = createSelector(
  getProductState,
  (state) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  (entities) => {
    return Object.keys(entities).map((id) => entities[id]);
  }
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
