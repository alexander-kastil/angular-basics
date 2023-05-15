import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseAuthService } from '../../../fbauth/firebase-auth.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
})
export class FirebaseComponent implements OnInit {
  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  constructor(private dialog: MatDialog, public as: FirebaseAuthService) {}

  currentUser: firebase.default.User | null = null;

  ngOnInit() {
    this.as.getUser().subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  logIn() {
    this.dialog.open(this.loginTemplate, { width: '350px' });
  }

  registerUser() {
    this.dialog.open(this.registerTemplate, { width: '350px' });
  }
}
