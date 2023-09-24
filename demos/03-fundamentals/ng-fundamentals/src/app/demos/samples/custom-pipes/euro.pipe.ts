import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'euro',
    standalone: true,
})
export class EuroPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let result = `${value.toFixed(2)} €`;
    return result;
  }
}
