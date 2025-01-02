import { AsyncPipe } from '@angular/common';
import {
  Component,
  TemplateRef,
  inject,
  input,
  viewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { combineLatestWith, map } from 'rxjs/operators';
import { LoginComponent } from '../../firebase-auth/components/login/login.component';
import { RegisterComponent } from '../../firebase-auth/components/register/register.component';
import { FirebaseAuthService } from '../../firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [
    AsyncPipe,
    MatCardModule,
    MatButtonModule,
    RegisterComponent,
    LoginComponent
  ]
})
export class IntroComponent {
  readonly registerTemplate = viewChild.required<TemplateRef<any>>('register');
  readonly loginTemplate = viewChild.required<TemplateRef<any>>('login');
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
  readonly img = input<string>('');
  dialog = inject(MatDialog);
  as = inject(FirebaseAuthService);
  router = inject(Router);
  authEnabled = this.as.isAuthenticated();

  logIn() {
    this.dialog
      .open(this.loginTemplate(), { width: '550px' })
      .afterClosed()
      .pipe(
        combineLatestWith(this.as.isAuthenticated()),
        map(([close, isAuthenticated]) => {
          if (isAuthenticated) {
            this.router.navigate(['demos']);
          } else {
            this.router.navigate(['/']);
          }
        })
      )
      .subscribe();
  }

  registerUser() {
    this.dialog
      .open(this.registerTemplate(), { width: '550px' })
      .afterClosed()
      .pipe(
        combineLatestWith(this.as.isAuthenticated()),
        map(([close, isAuthenticated]) => {
          if (isAuthenticated) {
            this.router.navigate(['demos']);
          } else {
            this.router.navigate(['/']);
          }
        })
      )
      .subscribe();
  }

  goToDemos() {
    this.router.navigate(['demos']);
  }
}
