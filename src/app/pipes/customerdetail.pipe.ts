import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../data/api.service';

@Pipe({
  name: 'customerdetail',
})
export class CustomerdetailPipe implements PipeTransform {
  constructor(private apiservice: ApiService) {}
  transform(custid: number): Observable<string> {
    return this.apiservice.customers$.pipe(
      map((cust) => cust.filter((c) => c.id === custid)),
      take(1),
      map((cs) => cs[0].name)
    );
  }
}
