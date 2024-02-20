import { Component, inject } from '@angular/core';
import { NavItem } from './nav-item.model';
import { NavbarService } from './navbar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideMenuService } from '../sidemenu/sidemenu.service';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { CurrentUserComponent } from '../../firebase-auth/components/current-user/current-user.component';
import { LogoutBtnComponent } from '../../firebase-auth/components/logout-btn/logout-btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    AsyncPipe,
    CurrentUserComponent,
    LogoutBtnComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  nav = inject(NavbarService);
  navItems = this.nav.getItems()
  sideMenu = inject(SideMenuService);
  navVisible = this.sideMenu.getSideNavVisible();

  toggleMenu() {
    this.sideMenu.toggleMenuVisibility();
  }
}
