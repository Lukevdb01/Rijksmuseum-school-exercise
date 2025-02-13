import { createRouter, createWebHistory } from 'vue-router';
import * as path from "path";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/homepage.vue')
        },
        {
            path: '/homepage',
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
            component: () => import('../pages/favorite.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../pages/404.vue')
        },
        {
            path: '/camera',
            component: () => import('../pages/camera.vue')
        },
        {
            path: '/login',
            component: () => import('../pages/login.vue')
        },
        {
            path: '/signup',
            component: () => import('../pages/signup.vue')
        }
    ],
});

export default router;