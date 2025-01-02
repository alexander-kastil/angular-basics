import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideMenuService } from '../sidemenu/sidemenu.service';
import { NavbarService } from './navbar.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, AsyncPipe],
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
