import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { RouteConfigLoadEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
})
export class IntroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() img = '';
}
