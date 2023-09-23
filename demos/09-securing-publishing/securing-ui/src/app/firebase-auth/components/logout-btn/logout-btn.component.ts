import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    AsyncPipe,
  ],
})
export class LogoutBtnComponent {
  as = inject(FirebaseAuthService);
  currentUser = this.as.getUser();

  logOut() {
    this.as.logOut();
  }
}
