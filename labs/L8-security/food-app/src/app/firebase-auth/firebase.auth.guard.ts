import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseAuthService } from './firebase-auth.service';

export const authGuard = () => {
  const auth = inject(FirebaseAuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  var user = auth.getUser();

  return user.pipe(
    map((user) => {
      if (environment.authEnabled == false || user != null) {
        return true;
      } else {
        snackBar.open('Error', 'You must be logged in to view this page.', { duration: 2000 });
        router.navigate(['/']);
        return false;
      }
    })
  );
};