import { NgStyle } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
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
    NgStyle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nav = inject(SideMenuService);
  title = environment.title;

  navPosition = this.nav.getSideNavPosition();
  navVisible = this.nav.getSideNavVisible();
  workbenchMargin = {};

  constructor() {
    effect(() => {
      this.workbenchMargin = this.navVisible() ? { 'margin-left': '0.5rem' } : {};
      console.log('Workbench margin:', this.workbenchMargin);
    })
  }
}
