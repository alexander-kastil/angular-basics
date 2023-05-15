- This sample uses fbauth.module.ts. To be able to use Firebase Auth you must:
- Create an account at [Firebase](https://firebase.google.com/)
- Update your Firebase Config in `environment.ts`

  ```typescript
  export const environment = {
    production: false,
    authEnabled: true,
    title: 'Security & Publishing',
    markdownPath: '/assets/markdown/',
    api: 'http://localhost:3000/',
    firebaseConfig: {
      apiKey: "AIzaSyAegWtmbrV-ANmwcslPDUhAaftO39ylxxx",
      authDomain: "ngfbdemo.firebaseapp.com",
      projectId: "ngfbdemo",
      storageBucket: "ngfbdemo.appspot.com",
      messagingSenderId: "1012570687700",
      appId: "1:1012570687704:web:574e8b717eba204dc4axxx",
      measurementId: "G-61P0T6NFBX7"
    },
  };
  ```

- Examine `firebase-auth.service.ts` and its usage in `register.component.ts` and `login.component.ts`
