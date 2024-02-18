- Firebase is a platform developed by Google for creating mobile and web applications. Besides authentication, it provides services like real-time database, cloud storage, and cloud functions. We will use it for authentication in this project because it is easy to use and provides a free tier.

- Create an account at [Firebase Console](https://firebase.google.com/)

- Firebase Authentication is implemented in the `src/app/firebase-auth` folder. 

- To be able to use Firebase Auth you must update your Firebase Config in `environment.ts`

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
