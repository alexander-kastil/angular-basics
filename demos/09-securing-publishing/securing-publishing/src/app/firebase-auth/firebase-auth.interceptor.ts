import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { FirebaseAuthService } from './firebase-auth.service';

export const firebaseAuthInterceptor: HttpInterceptorFn = (req, next,) => {
  const auth = inject(FirebaseAuthService);
  if (auth.isAuthenticated() && req.url.includes(environment.api) == false) {
    const token = auth.getToken();
    console.log('adding token to header:', token)
    const modifiedRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + token
      ),
    });
    return next(modifiedRequest);
  } else {
    console.log('Http-Error', 'You must be logged in to ...');
  }
  return next(req);
};