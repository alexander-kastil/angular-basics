import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss'],
})
export class LogoutBtnComponent implements OnInit {
  currentUser = this.as.getUser();
  constructor(private as: FirebaseAuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.as.logOut();
  }
}
