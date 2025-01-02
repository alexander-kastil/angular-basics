import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectiveComponent } from './directive.component';

describe('Component - Directive - CapitalizeDirective', () => {
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveComponent);
  });

  it('should create component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should capitalize text when initially clicked', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('[data-testid=div]') as HTMLElement;
    div.click();
    fixture.detectChanges();

    expect(div.style.textTransform).toBe('uppercase');
  });

  it('should lowercase when clicked twice', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('[data-testid=div]') as HTMLElement;
    fixture.autoDetectChanges();
    div.click();
    div.click();

    expect(div.style.textTransform).toBe('lowercase');
  });
});
