import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SideMenuComponent } from './shared/sidemenu/sidemenu.component';
import { FoodContainerComponent } from './food/food-container/food-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsyncPipe, NgStyle } from '@angular/common';
import { environment } from '../environments/environment';
import { SideMenuService } from './shared/sidemenu/sidemenu.service';
import { FirebaseAuthService } from './firebase-auth/firebase-auth.service';
import { tap } from 'rxjs';
import { IntroComponent } from './shared/intro/intro.component';
import { CenteredDirective } from './shared/formatting/formatting-directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    SideMenuComponent,
    FoodContainerComponent,
    MatSidenavModule,
    NgStyle,
    AsyncPipe,
    CenteredDirective,
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
