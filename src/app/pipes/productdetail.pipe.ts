import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../data/api.service';

@Pipe({
  name: 'productdetail',
})
export class ProductdetailPipe implements PipeTransform {
  constructor(private apiservice: ApiService) {}
  transform(prodid: number): Observable<string> {
    return this.apiservice.products$.pipe(
      map((prod) => prod.filter((p) => p.id === prodid)),
      take(1),
      map((pr) => pr[0].name)
    );
  }
}
