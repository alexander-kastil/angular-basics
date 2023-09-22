import { Component, Input } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
  ],
})
export class IntroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() img = '';
}
