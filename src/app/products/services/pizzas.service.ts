import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`http://localhost:3000/api/pizzas`)
      .pipe(catchError((error: any) => {throw throwError(error.json()) }));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`http://localhost:3000/api/pizzas`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`http://localhost:3000/api/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`http://localhost:3000/api/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
