import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { combineLatestWith, map } from 'rxjs/operators';
import { FirebaseAuthService } from '../../fbauth/firebase-auth.service';
import { LoginComponent } from '../../fbauth/components/login/login.component';
import { RegisterComponent } from '../../fbauth/components/register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, AsyncPipe } from '@angular/common';
import { CenteredDirective } from '../formatting-directives';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        CenteredDirective,
        NgIf,
        MatButtonModule,
        RouterLink,
        RegisterComponent,
        LoginComponent,
        AsyncPipe,
    ],
})
export class IntroComponent {
  as = inject(FirebaseAuthService);
  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  authEnabled = this.as.isAuthenticated();

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  logIn() {
    this.dialog
      .open(this.loginTemplate, { width: '350px' })
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
      .open(this.registerTemplate, { width: '350px' })
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
}
