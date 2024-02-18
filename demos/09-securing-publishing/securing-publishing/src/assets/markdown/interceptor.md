- Examine the implementation of `firebase-auth.interceptor`. It adds the Bearer token to the request header if the token is not empty. 

- The token is taken from `firebase-auth.service.ts`

  ```typescript
  export const firebaseAuthInterceptor: HttpInterceptorFn = (req, next,) => {
    const auth = inject(FirebaseAuthService);
    if (auth.isAuthenticated() && req.url.includes(environment.api) == false) {
      const token = auth.getToken();
      const modifiedRequest = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + token
        ),
      });
      return next(modifiedRequest);
  ```

- Register the interceptor in `app.config.ts`:

```typescript
export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptors([
            firebaseAuthInterceptor
        ])),
```
