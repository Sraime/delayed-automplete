import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fruit } from './fruit.interface';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }

  searchFruits(f): Observable<Fruit[]> {
    return of([{name: 'pomme'}, {name: 'poire'}])
  }
}
