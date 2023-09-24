import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[isEditable]',
    standalone: true,
})
export class EditableDirective {
  @HostBinding('attr.contentEditable') editable = true;
}
