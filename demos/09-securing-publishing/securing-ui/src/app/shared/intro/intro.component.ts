import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { combineLatestWith, map, tap } from 'rxjs';
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
    NgIf,
    AsyncPipe,
    RegisterComponent,
    LoginComponent
  ],
})
export class IntroComponent {
  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  @Input() isAuthenticated: boolean | null = false;
  @Input({ required: true }) title = '';
  @Input({ required: true }) subtitle = '';
  @Input({ required: true }) img = '';
  dialog = inject(MatDialog);
  router = inject(Router);

  logIn() {
    console.log('logIn - authEnabled: ', this.isAuthenticated);

    this.dialog.open(this.loginTemplate, { width: '350px' })
      .afterClosed()
      .pipe(
        tap(() => {
          if (this.isAuthenticated) {
            this.router.navigate(['main/demos']);
          } else {
            this.router.navigate(['/']);
          }
        }));

    // this.dialog
    //   .open(this.loginTemplate, { width: '350px' })
    //   .afterClosed()
    //   .pipe(
    //     combineLatestWith(this.as.isAuthenticated()),
    //     map(([close, isAuthenticated]) => {

    //     })
    //   )
    //   .subscribe();
  }

  registerUser() {
    this.dialog.open(this.registerTemplate, { width: '350px' })
      .afterClosed()
      .pipe(
        tap(() => {
          if (this.isAuthenticated) {
            this.router.navigate(['main/demos']);
          } else {
            this.router.navigate(['/']);
          }
        }));
    // this.dialog
    //   .open(this.registerTemplate, { width: '350px' })
    //   .afterClosed()
    //   .pipe(
    //     combineLatestWith(this.as.isAuthenticated()),
    //     map(([close, isAuthenticated]) => {
    //       if (isAuthenticated) {
    //         this.router.navigate(['demos']);
    //       } else {
    //         this.router.navigate(['/']);
    //       }
    //     })
    //   )
    //   .subscribe();
  }
}
