import { Component, inject, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MenuService } from './shared/menu/menu.service';
import { LoadingService } from './shared/loading/loading.service';
import { Observable, of, tap } from 'rxjs';
import { FirebaseAuthService } from './auth/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ms = inject(MenuService);
  ls = inject(LoadingService);
  auth = inject(FirebaseAuthService);
  title = 'Food App';
  mode: MatDrawerMode = 'side';
  changeDetector = inject(ChangeDetectorRef);
  isLoading = this.ls.getLoading();
  isAuthenticated: Observable<boolean> = of(false);

  constructor() {
    this.ms.sideNavPosition.subscribe((currentMode) => { this.mode = currentMode });
  }

  ngOnInit() {
    this.isAuthenticated = this.auth
      .isAuthenticated()
      .pipe(tap((auth) => console.log('auth changed to autheticated: ', auth)));
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.sideNavVisible.subscribe((visible) => {
      result = visible
        ? {
          'padding-left': '10px',
        }
        : {};
    });
    return result;
  }
}
