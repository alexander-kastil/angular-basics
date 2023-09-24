import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        RouterLink,
    ],
})
export class IntroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() img = '';
}
