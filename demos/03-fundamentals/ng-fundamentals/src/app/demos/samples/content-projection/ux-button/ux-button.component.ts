import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class uxButtonComponent {
  readonly disabled = input<boolean>(false);
  readonly label = input<string>('');
  readonly icon = input<string>('');
  click = output();

  buttonClicked() {
    this.click.emit();
  }
}
