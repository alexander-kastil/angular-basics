import { Component, inject } from '@angular/core';
import { NavItem } from './nav-item.model';
import { NavbarService } from './navbar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  ns = inject(NavbarService);
  navItems: NavItem[] = [];

  ngOnInit() {
    this.ns.getItems().subscribe((data) => {
      this.navItems = data;
    });
  }
}
