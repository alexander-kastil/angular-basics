import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideNavService } from '../sidenav/sidenav.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { CurrentUserComponent } from '../../firebase-auth/components/current-user/current-user.component';
import { LogoutBtnComponent } from '../../firebase-auth/components/logout-btn/logout-btn.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    LogoutBtnComponent,
    CurrentUserComponent
  ]
})
export class NavbarComponent {
  ms = inject(SideNavService);
  sns = inject(SnackbarService);
  menuItems = this.ms.getTopItems();

  toggleMenu() {
    this.ms.toggleMenuVisibility();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented - just a mock');
  }
}
