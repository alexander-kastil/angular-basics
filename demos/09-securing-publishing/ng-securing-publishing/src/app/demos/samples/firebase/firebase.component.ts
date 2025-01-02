import { Component, OnInit, TemplateRef, inject, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseAuthService } from '../../../firebase-auth/firebase-auth.service';
import { LoginComponent } from '../../../firebase-auth/components/login/login.component';
import { RegisterComponent } from '../../../firebase-auth/components/register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatButtonModule,
    RegisterComponent,
    LoginComponent,
  ],
})
export class FirebaseComponent implements OnInit {
  readonly registerTemplate = viewChild.required<TemplateRef<any>>('register');
  readonly loginTemplate = viewChild.required<TemplateRef<any>>('login');
  dialog = inject(MatDialog);
  as = inject(FirebaseAuthService);

  currentUser: any = null;

  ngOnInit() {
    this.as.getUser().subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  logIn() {
    this.dialog.open(this.loginTemplate(), { width: '350px' });
  }

  registerUser() {
    this.dialog.open(this.registerTemplate(), { width: '350px' });
  }
}
