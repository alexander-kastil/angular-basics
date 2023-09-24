declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  authEnabled: window['env'].AUTH_ENABLED || false,
  title: 'Security & Publishing',
  markdownPath: '/assets/markdown/',
  api: window['env'].API_URL || 'http://localhost:3000/',
  netapi: window['env'].NETAPI_URL || 'https://localhost:5001/',
  firebaseConfig: {
    apiKey: "AIzaSyBaPVCIxwLnrkdvcIRnaRlA8rRx0H-yQMo",
    authDomain: "ng-dev-auth.firebaseapp.com",
    projectId: "ng-dev-auth",
    storageBucket: "ng-dev-auth.appspot.com",
    messagingSenderId: "602131408852",
    appId: "1:602131408852:web:4b1fc82818590267aed841",
    measurementId: "G-MDN0SW12SX"
  },
};
