import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import router from './services/routing'

createApp(App).use(router).mount('#app')

