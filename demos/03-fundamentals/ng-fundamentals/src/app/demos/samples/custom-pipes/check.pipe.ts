import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toChecked',
    standalone: true,
})
export class CheckPipe implements PipeTransform {
  transform(checked: boolean): any {
    const result: string =
      checked == true
        ? '<span class="material-icons">check</span>'
        : '<span>&nbsp</span>';
    return result;
  }
}
