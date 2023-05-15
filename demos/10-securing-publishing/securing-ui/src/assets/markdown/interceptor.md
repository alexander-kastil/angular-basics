Examine the intercept method in `firebase.interceptor.ts`:

```typescript
public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
  if (this.token != '') {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${this.token}` },
    });
    console.log('Interceptor added Bearer Token for request', cloned);
    return next.handle(cloned);
  } else {
    return next.handle(req);
  }
}
```

The interceptor is registered in `demo.module.ts`:

```typescript
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseInterceptor,
      multi: true,
    },
  ],
```