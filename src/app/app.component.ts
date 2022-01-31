import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './data/api.service';
import { Order } from './data/order';
import { concatMap, map } from 'rxjs/operators';
import { Product } from './data/product';

@Component({
  selector: 'app-root',
  template: `
    <h1>sasa</h1>
    <select [(ngModel)]="selectedCustomerid">
      <!-- 2. TODO implement a select to filter orders by customer name -->
      <option value="-1">ALL</option>
      <option
        *ngFor="let cust of apiService.customers$ | async"
        [value]="cust.id"
      >
        {{ cust.name }}
      </option>
    </select>

    <table>
      <thead>
        <th>Order Id</th>
        <th>Customer Name</th>
        <th>Order Date</th>
        <th>Product Name</th>
      </thead>
      <tbody>
        <!-- 1. TODO display a list of orders here. -->
        <ng-container *ngIf="apiService.orders$ | async as orders">
          <tr *ngFor="let order of orders | filterdata: selectedCustomerid">
            <td>
              {{ order.id }}
            </td>
            <td>
              {{ order.customerId | customerdetail | async }}
            </td>
            <td>
              {{ order.date }}
            </td>
            <td>
              {{ order.productId | productdetail | async }}
            </td>
          </tr>
        </ng-container>
      </tbody>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  selectedCustomerid: string = '-1';
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {}
}
