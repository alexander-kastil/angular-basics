import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-use-spy',
    templateUrl: './use-spy.component.html',
    styleUrls: ['./use-spy.component.scss'],
    standalone: true,
    imports: [MatCardModule],
})
export class UseSpyComponent {
  as = inject(AuthService);
  loggedIn = this.as.isAuthenticated();
}
