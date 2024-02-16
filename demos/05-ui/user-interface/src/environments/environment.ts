declare global {
    interface Window {
        env: any;
    }
}

export const environment = {
    authEnabled: window['env'].AUTH_ENABLED || true,
    adminAuthEnabled: true,
    title: 'User Interface',
    markdownPath: '/assets/markdown/',
    api: window['env'].API_URL || 'http://localhost:3000/',
    netapi: window['env'].NETAPI_URL || 'https://localhost:5001/',
    fixerApi: '',
    firebaseConfig: {
        apiKey: "AIzaSyAxdC7L8YvDZrOMyuzSBKU6GvvG74BsJoI",
        authDomain: "ng-app-a70fb.firebaseapp.com",
        projectId: "ng-app-a70fb",
        storageBucket: "ng-app-a70fb.appspot.com",
        messagingSenderId: "593665171121",
        appId: "1:593665171121:web:40448d83feefe76e368c90",
        measurementId: "G-96J0PX8E9J"
    }
};
