import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';
import * as fromStore  from '../../store';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas$ | async)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]> = this.store.select(fromStore.getAllPizzas);;

  constructor(private store: Store<fromStore.ProductState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadPizzas())
  }
}