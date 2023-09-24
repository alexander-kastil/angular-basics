import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideNavService } from '../sidenav/sidenav.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { LogoutBtnComponent } from 'src/app/firebase-auth/components/logout-btn/logout-btn.component';
import { CurrentUserComponent } from 'src/app/firebase-auth/components/current-user/current-user.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    NgFor,
    LogoutBtnComponent,
    CurrentUserComponent
  ],
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
