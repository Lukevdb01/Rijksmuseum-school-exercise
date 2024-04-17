import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/sample',
            component: () => import('../pages/sample.vue')
        },
    ],
});

export default router;