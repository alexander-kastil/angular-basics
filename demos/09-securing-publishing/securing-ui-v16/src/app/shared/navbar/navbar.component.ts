import { Component, inject } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { SideNavService } from '../sidenav/sidenav.service';
import { LogoutBtnComponent } from '../../fbauth/components/logout-btn/logout-btn.component';
import { CurrentUserComponent } from '../../fbauth/components/current-user/current-user.component';
import { RowDirective } from '../formatting-directives';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        MatIconModule,
        NgFor,
        RouterLinkActive,
        RouterLink,
        RowDirective,
        CurrentUserComponent,
        LogoutBtnComponent,
        AsyncPipe,
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
