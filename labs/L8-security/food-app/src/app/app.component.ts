import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from '../environments/environment';
import { FirebaseAuthService } from './firebase-auth/firebase-auth.service';
import { IntroComponent } from './shared/intro/intro.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SideMenuComponent } from './shared/sidemenu/sidemenu.component';
import { SideMenuService } from './shared/sidemenu/sidemenu.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    SideMenuComponent,
    MatSidenavModule,
    NgStyle,
    AsyncPipe,
    IntroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nav = inject(SideMenuService);
  auth = inject(FirebaseAuthService);
  title = environment.title;

  navPosition = this.nav.getSideNavPosition();
  navVisible = this.nav.getSideNavVisible();
  workbenchMargin: any = {};

  isAuthenticated = this.auth
    .isAuthenticated()
    .pipe(tap((auth) => console.log('authState changed to:', auth)));

  constructor() {
    effect(() => {
      this.workbenchMargin = this.navVisible() ? { 'padding-left': '1rem' } : {};
    })
  }
}
