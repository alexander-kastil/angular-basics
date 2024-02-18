import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { FirebaseAuthService } from './firebase-auth.service';
import { Inject, forwardRef, Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';


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


// @Injectable()
// export class FirebaseAuthInterceptor implements HttpInterceptor {
//   constructor(
//     @Inject(forwardRef(() => FirebaseAuthService)) as: FirebaseAuthService
//   ) {
//     as.getToken().subscribe((t) => {
//       this.token = t;
//     });
//   }

//   token: string = '';

//   public intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (this.token != '') {
//       const cloned = req.clone({
//         setHeaders: { Authorization: `Bearer ${this.token}` },
//       });
//       console.log('Interceptor added Bearer Token for request', cloned);
//       return next.handle(cloned);
//     } else {
//       return next.handle(req);
//     }
//   }
// }
