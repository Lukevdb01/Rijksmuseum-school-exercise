// Vue imports
import { createApp } from 'vue';
import App from './App.vue';
import router from './providers/routing';
import { createHead } from '@vueuse/head';

// Firebase imports
import { initializeApp } from "firebase/app";
import 'firebase/auth';

// Misc imports
import './style.css';

// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Vue application
const vueApp = createApp(App);
const head = createHead();

// Mount Vue application
vueApp.use(router);
vueApp.use(head);

vueApp.mount('#app');

