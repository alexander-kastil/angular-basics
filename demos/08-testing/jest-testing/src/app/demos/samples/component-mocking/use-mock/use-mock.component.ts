import { Component } from '@angular/core';
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
  constructor(private as: AuthService) {
    this.loggedIn = this.as.isAuthenticated();
  }

  loggedIn: boolean;
}
