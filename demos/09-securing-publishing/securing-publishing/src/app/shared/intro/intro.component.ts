import { AsyncPipe } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild, inject, input, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { LoginComponent } from 'src/app/firebase-auth/components/login/login.component';
import { RegisterComponent } from 'src/app/firebase-auth/components/register/register.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    AsyncPipe,
    RegisterComponent,
    LoginComponent,

  ],
})
export class IntroComponent {
  registerTemplate = viewChild.required('register', { read: TemplateRef });
  loginTemplate = viewChild.required('login', { read: TemplateRef });
  isAuthenticated = input.required<boolean>();
  title = input.required<string>();
  subtitle = input.required<string>();
  img = input.required<string>();
  dialog = inject(MatDialog);
  router = inject(Router);

  logIn() {
    console.log('logIn - authEnabled: ', this.isAuthenticated);

    this.dialog.open(this.loginTemplate(), { width: '350px' })
      .afterClosed()
      .pipe(
        tap(() => {
          if (this.isAuthenticated()) {
            this.router.navigate(['main/demos']);
          } else {
            this.router.navigate(['/']);
          }
        }));
  }

  registerUser() {
    this.dialog.open(this.registerTemplate(), { width: '350px' })
      .afterClosed()
      .pipe(
        tap(() => {
          if (this.isAuthenticated()) {
            this.router.navigate(['main/demos']);
          } else {
            this.router.navigate(['/']);
          }
        }));
  }
}
