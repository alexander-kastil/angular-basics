import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[isEditable]',
})
export class EditableDirective {
  @HostBinding('attr.contentEditable') editable = true;
}
