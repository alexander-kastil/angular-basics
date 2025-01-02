import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-use-mock',
  templateUrl: './use-mock.component.html',
  styleUrls: ['./use-mock.component.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class UseMockComponent {
  auth = inject(AuthService);
  loggedIn = this.auth.isAuthenticated();
}
