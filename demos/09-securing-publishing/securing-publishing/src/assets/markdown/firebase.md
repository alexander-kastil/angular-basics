- Create an account at [Firebase](https://firebase.google.com/)

- Firebase Authentication is implemented in the `src/app/firebase-auth` folder. To be able to use Firebase Auth you must:

- Update your Firebase Config in `environment.ts`

  ```typescript
  export const environment = {
    production: false,
    authEnabled: true,
    title: 'Security & Publishing',
    markdownPath: '/assets/markdown/',
    api: 'http://localhost:3000/',
    firebaseConfig: {
     <FIREBASE_CONFIGURATION>
    },
  };
  ```

- Examine `firebase-auth.service.ts` and its usage in `register.component.ts` and `login.component.ts`.
