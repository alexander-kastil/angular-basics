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
