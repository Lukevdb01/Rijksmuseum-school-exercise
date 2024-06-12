// Vue imports
import { createApp } from 'vue';
import App from './App.vue';
import router from './providers/routing';
import { createHead } from '@vueuse/head';

// Misc imports
import './style.css';

// Initialize Vue application
const vueApp = createApp(App);
const head = createHead();

// Mount Vue application
vueApp.use(router);
vueApp.use(head);

vueApp.mount('#app');

