import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/qr-app',
            component: () => import('../pages/qr-scanner.vue')
        },
        {
            path: '/information',
            component: () => import('../pages/information.vue')
        }
    ],
});

export default router;