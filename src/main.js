import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './services/routing';
import { createHead } from '@vueuse/head';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import app from "./App.vue";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcWPrLrL13TLTo8ieMyAPBYoxZchu4B-4",
    authDomain: "samed-luuk-rijksapi.firebaseapp.com",
    projectId: "samed-luuk-rijksapi",
    storageBucket: "samed-luuk-rijksapi.appspot.com",
    messagingSenderId: "531933662431",
    appId: "1:531933662431:web:758dea8ab5b42a4988ad6a",
    measurementId: "G-TSB9B1ETWB"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Initialize Vue application
const vueApp = createApp(App);
const head = createHead();

vueApp.use(router);
vueApp.use(head);

vueApp.mount('#app');

