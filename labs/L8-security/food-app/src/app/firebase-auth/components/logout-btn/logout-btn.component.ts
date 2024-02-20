import { Component, OnInit, inject } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss'],
  standalone: true,
  imports: [MatButton, AsyncPipe],
})
export class LogoutBtnComponent {
  auth = inject(FirebaseAuthService);
  currentUser = this.auth.getUser();

  logOut() {
    this.auth.logOut();
  }
}
