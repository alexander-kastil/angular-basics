import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss'],
})
export class LogoutBtnComponent {
  as = inject(FirebaseAuthService);
  currentUser = this.as.getUser();

  logOut() {
    this.as.logOut();
  }
}
