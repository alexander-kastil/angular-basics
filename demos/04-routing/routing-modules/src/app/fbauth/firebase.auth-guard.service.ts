import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FirebaseAuthService } from './firebase-auth.service';
import { SnackbarService } from '../shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthGuard {
  as = inject(FirebaseAuthService);
  sns = inject(SnackbarService);
  router = inject(Router);
  user = this.as.getUser();

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.user.pipe(
      map((user) => {
        if (environment.authEnabled == false || user != null) {
          return true;
        } else {
          this.sns.displayAlert('Error', 'You must be logged in to view this page.');
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.user.pipe(
      map((user) => {
        if (environment.authEnabled == false || user != null) {
          return true;
        } else {
          this.sns.displayAlert('Error', 'You must be logged in to view this page.');
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
