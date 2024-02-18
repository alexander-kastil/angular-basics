import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, AsyncPipe } from '@angular/common';

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
