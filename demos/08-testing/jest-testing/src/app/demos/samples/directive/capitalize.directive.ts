import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
    selector: '[appCapitalize]',
    standalone: true,
})
export class CapitalizeDirective {
  el = inject(ElementRef);

  @HostListener('click') onClick() {
    this.el.nativeElement.style.textTransform === 'uppercase'
      ? (this.el.nativeElement.style.textTransform = 'lowercase')
      : (this.el.nativeElement.style.textTransform = 'uppercase');
  }
}
