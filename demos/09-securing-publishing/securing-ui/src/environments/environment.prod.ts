declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  authEnabled: true,
  title: 'Security & Publishing',
  markdownPath: '/assets/markdown/',
  api: window['env'].API_URL || 'http://localhost:3000/',
  netapi: 'https://localhost:5001/',
  firebaseConfig: {
    apiKey: "AIzaSyAPKtx6dF6yxNdhH7bgcP-8HkoBBBslxDw",
    authDomain: "ngrx-auth-afd25.firebaseapp.com",
    projectId: "ngrx-auth-afd25",
    storageBucket: "ngrx-auth-afd25.appspot.com",
    messagingSenderId: "132162921706",
    appId: "1:132162921706:web:0d9044c6fa18a47a75e393",
    measurementId: "G-5B22G9REW2"
  },
};
