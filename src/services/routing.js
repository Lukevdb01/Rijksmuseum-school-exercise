import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/homepage.vue')
        },
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
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../pages/404.vue')
        },
        {
            path: '/camera',
            component: () => import('../pages/camera.vue')
        }
    ],
});

export default router;