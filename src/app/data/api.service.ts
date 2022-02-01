import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Product } from '../data/product';
import { Customer } from './customer';
import { Order } from './order';

@Injectable({ providedIn: 'root' })
export class ApiService {
  products$ = this.http.get<Product[]>('api/products').pipe(shareReplay());
  customers$ = this.http.get<Customer[]>('api/customers').pipe(shareReplay());
  orders$ = this.http.get<Order[]>('api/orders');

  constructor(private http: HttpClient) {}
}
