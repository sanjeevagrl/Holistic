import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../data/customer';
import { Order } from '../data/order';

@Pipe({
  name: 'filterdata',
})
export class FilterdataPipe implements PipeTransform {
  transform(data: Order[], searchValue?: string) {
    if (!data || searchValue === '-1') return data;
    return data.filter((order) => order.customerId === Number(searchValue));
  }
}
