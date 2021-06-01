import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';

import * as fromServices from '../../services';
import * as pizzaActions from '../../store/actions/pizzas.actions';
import * as fromEnums from '../enums';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  loadPizzas$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromEnums.LOAD_PIZZAS),
        switchMap(() =>
          this.pizzaService.getPizzas().pipe(
            map(
              (pizzas) => pizzaActions.LoadPizzasSuccess({ pizzas }),
              catchError((error) => of(pizzaActions.LoadPizzasFail({ error })))
            )
          )
        )
      ),
    {
      dispatch: true,
    }
  );
}
