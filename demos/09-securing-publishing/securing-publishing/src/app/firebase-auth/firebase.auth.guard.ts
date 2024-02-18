import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { SnackbarService } from '../shared/snackbar/snackbar.service';
import { FirebaseAuthService } from './firebase-auth.service';

export const firebaseAuthGuard = () => {
  const router = inject(Router);
  const sns = inject(SnackbarService);
  const as = inject(FirebaseAuthService);
  var user = as.getUser();

  return user.pipe(
    map((user) => {
      if (environment.authEnabled == false || user != null) {
        return true;
      } else {
        sns.displayAlert('Error', 'You must be logged in to view this page.');
        router.navigate(['/']);
        return false;
      }
    })
  );
};