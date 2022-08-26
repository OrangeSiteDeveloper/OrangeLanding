import {
    createRouter as createVueRouter,
    createMemoryHistory,
    createWebHistory,
    Router
} from 'vue-router';

export const createRouter = (type: 'client' | 'server'): Router =>
    createVueRouter({
        history: type === 'client' ? createWebHistory() : createMemoryHistory(),

        routes: [
            {
                path: '/',
                name: 'Home',
                meta: {
                    title: '首页',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/Home.vue')
            },
            {
                path: '/about',
                name: 'about',
                meta: {
                    title: '关于我们',
                    keepAlive: true,
                    requireAuth: false
                },
                component: () => import('@/pages/About.vue')
            },
            {
                path: '/registration',
                name: 'registration',
                meta: {
                    title: '报名页面',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/Registration.vue')
            },
            {
                path: '/status',
                name: 'status',
                meta: {
                    title: '状态查询',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/Status.vue')
            }
        ]
    });
