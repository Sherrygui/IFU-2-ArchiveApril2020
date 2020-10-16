import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/totoro',
        name: 'Totoro',
        component: () => import('../views/Totoro.vue'),
    },
    {
        path: '/isic',
        name: 'Isic',
        component: () => import('../views/Isic.vue'),
    },
    {
        path: '/dma',
        name: 'Dma',
        component: () => import('../views/Dma.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '/question',
        name: 'Question',
        component: () => import('../views/Question.vue'),
    },
    {
        path: '/AI',
        name: 'AI',
        component: () => import('../views/AI.vue'),
    },
    {
        path: '/3D',
        name: '3D',
        component: () => import('../views/3D.vue'),
    },
    {
        path: '/robot',
        name: 'Robot',
        component: () => import('../views/Robot.vue'),
    },
    {
        path: '/team',
        name: 'Team',
        component: () => import('../views/Team.vue'),
    },
    {
        path: '/donation',
        name: 'Donation',
        component: () => import('../views/Donation.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
