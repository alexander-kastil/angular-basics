import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NavItem } from '../navbar/nav-item.model';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  http = inject(HttpClient);
  breakpointObserver = inject(BreakpointObserver);
  visible = signal(true);
  position = signal<MatDrawerMode>('side');

  constructor() {
    this.watchScreen.subscribe();
  }

  getSideNavVisible() {
    return computed(() => this.visible());
  }

  getSideNavPosition() {
    return computed(() => this.position());
  }

  watchScreen = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      tap((matchesBreakpoint) => {
        console.log(matchesBreakpoint);
        this.visible.set(matchesBreakpoint.matches ? false : true);
        this.position.set(matchesBreakpoint.matches ? 'over' : 'side');
      })
    );

  setSideNavEnabled(val: boolean) {
    this.visible.set(val);
  }

  adjustSidenavToScreen(mq: string): boolean {
    return mq == 'xs' ? false : true;
  }

  toggleMenuVisibility() {
    this.visible.update((val) => !val);
  }

  getTopItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(`${environment.api}top-links`);
  }
}
