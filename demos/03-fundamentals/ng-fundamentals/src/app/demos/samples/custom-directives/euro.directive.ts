import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[toEuro]',
  standalone: true,
})
export class EuroDirective {
  elementRef = inject(ElementRef)
  private el: HTMLInputElement;

  constructor() {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: string) {
    this.el.value = value.replace(' €', '');
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    this.el.value = `${value} €`;
  }
}
