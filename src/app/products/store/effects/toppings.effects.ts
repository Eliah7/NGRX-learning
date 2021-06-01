import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ToppingsService } from '../../services';
import * as toppingsActions from '../actions/toppings.actions';

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions: Actions,
    private toppingsService: ToppingsService
  ) {}

  loadToppings$ = createEffect(() =>
    this.actions.pipe(
      ofType(toppingsActions.LOAD_TOPPING),
      switchMap(() =>
        this.toppingsService.getToppings().pipe(
          map(
            (toppings) => new toppingsActions.LoadToppingSuccess(toppings),
            catchError((error) =>
              of(new toppingsActions.LoadToppingFail(error))
            )
          )
        )
      )
    )
  );
}
