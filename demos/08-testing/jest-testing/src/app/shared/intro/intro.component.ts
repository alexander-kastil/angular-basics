import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
})
export class IntroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() img = '';
}
