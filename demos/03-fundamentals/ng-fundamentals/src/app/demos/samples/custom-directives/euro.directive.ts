import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[toEuro]',
    standalone: true,
})
export class EuroDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
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
