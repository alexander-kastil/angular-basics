import { Component, TemplateRef, inject, input, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { LoginComponent } from '../../firebase-auth/components/login/login.component';
import { RegisterComponent } from '../../firebase-auth/components/register/register.component';
import { CenteredDirective } from '../formatting/formatting-directives';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    RegisterComponent,
    LoginComponent,
    CenteredDirective
  ]
})
export class IntroComponent {
  readonly registerTemplate = viewChild.required<TemplateRef<any>>('register');
  readonly loginTemplate = viewChild.required<TemplateRef<any>>('login');
  readonly isAuthenticated = input<boolean | null>(false);
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly img = input.required<string>();
  dialog = inject(MatDialog);
  router = inject(Router);

  logIn() {
    console.log('logIn - authEnabled: ', this.isAuthenticated());

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
