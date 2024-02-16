import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SnackbarService } from '../snackbar/snackbar.service';


export const adminGuard = () => {
    const router = inject(Router);
    const sns = inject(SnackbarService);
    const allowAccess = !environment.adminAuthEnabled;
    return allowAccess ? true : router.navigate(['/']).then(() => sns.displayAlert('Error', 'You are not allowed to navigate to this page.'));
};
