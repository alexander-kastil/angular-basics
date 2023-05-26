import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  fireAuth = inject(AngularFireAuth);
  router = inject(Router);

  private user: Observable<firebase.default.User | null> = this.
    fireAuth.authState.pipe(
      tap((state) => console.log('auth state: ', state))
    );

  private token = this.fireAuth.authState.pipe(
    switchMap((user) => {
      if (user) {
        return user.getIdToken();
      } else {
        return '';
      }
    }),
    tap((token) => {
      // redirect to entry page if auth is enabled and user is not logged in
      // stay on the same route if auth is not enabled
      if (token == '' && environment.authEnabled) {
        this.router.navigate(['/']);
      }
    })
  );

  getUser() {
    return this.user;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.pipe(
      map((user) => {
        let authEnabled = environment.authEnabled;
        return authEnabled == false || user != null ? true : false;
      })
    );
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth.setPersistence('none').then(() => {
      return this.fireAuth
        .createUserWithEmailAndPassword(email, password)
        .catch((err: any) => {
          console.log('Error creating User', err);
          return err;
        });
    });
  }

  logIn(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth.setPersistence('none').then(() => {
      return this.fireAuth
        .signInWithEmailAndPassword(email, password)
        .catch((err: any) => {
          console.log('Error logging in', err);
          return err;
        });
    });
  }

  logOut() {
    this.fireAuth
      .signOut()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err: any) => console.log('Error in signOut', err));
  }
}
