import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/qr-app',
            component: () => import('../pages/qr-scanner.vue')
        },
        {
            path: '/info-page',
            component: () => import('../pages/information.vue')
        },
        {
            path: '/search',
            component: () => import('../pages/search.vue')
        },
        {
            path: '/favorites',
            component: () => import('../pages/favorite.vue')
        }
    ],
});

export default router;