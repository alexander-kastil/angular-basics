import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent {
  currentUser = this.as.getUser();

  constructor(public as: FirebaseAuthService) {}

  ngOnInit(): void {}
}
