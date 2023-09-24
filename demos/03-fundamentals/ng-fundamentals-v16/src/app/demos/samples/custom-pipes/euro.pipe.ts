import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro',
})
export class EuroPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let result = `${value.toFixed(2)} €`;
    return result;
  }
}
