import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loading: boolean;
  loaded: boolean;
}

export const defaultState = {
  loading: false,
  loaded: false,
};

export interface PizzaEntityState extends EntityState<Pizza> {
  // additional entity state properties
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();

export const initialPizzaState: PizzaEntityState =
  adapter.getInitialState(defaultState);
