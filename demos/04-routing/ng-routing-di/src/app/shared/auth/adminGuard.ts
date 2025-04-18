import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';
import { environment } from '../../../environments/environment';

export const adminGuard = () => {
  const router = inject(Router);
  const sns = inject(SnackbarService);

  const allowAccess = !environment.authEnabled;

  return allowAccess
    ? true
    : router
        .navigate(['/'])
        .then(() =>
          sns.displayAlert(
            'Error',
            'You are not allowed to navigate to this page.'
          )
        );
};
