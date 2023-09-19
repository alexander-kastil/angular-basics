import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SnackbarService } from './shared/snackbar/snackbar.service';

export const authGuard = () => {
  const router = inject(Router);
  const sns = inject(SnackbarService);
  const allowAccess = !environment.authEnabled;
  return allowAccess ? true : router.navigate(['/']).then(() => sns.displayAlert('Error', 'You are not allowed to navigate to this page.'));
};


// @Injectable()
// export class IsAuthRouteGuard {
//   allowAccess: boolean = !environment.authEnabled;
//   constructor(private router: Router, private sns: SnackbarService) { }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.allowAccess) {
//       return true;
//     } else {
//       this.sns.displayAlert('Error', 'You are not allowed to navigate to this page.');
//       this.router.navigate(['/']);
//       return false;
//     }
//   }

//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return this.canActivate(route, state);
//   }
// }
