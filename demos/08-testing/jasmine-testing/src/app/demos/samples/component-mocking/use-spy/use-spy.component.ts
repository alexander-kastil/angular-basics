import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-use-spy',
  templateUrl: './use-spy.component.html',
  styleUrls: ['./use-spy.component.scss'],
})
export class UseSpyComponent {
  as = inject(AuthService);
  loggedIn = this.as.isAuthenticated();
}
