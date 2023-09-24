import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'ux-button',
    templateUrl: './ux-button.component.html',
    styleUrls: ['./ux-button.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatIconModule],
})
export class uxButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() icon: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buttonClicked() {
    this.click.emit();
  }
}
