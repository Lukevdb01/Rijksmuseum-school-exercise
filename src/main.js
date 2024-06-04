import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './services/routing';
import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount('#app');
