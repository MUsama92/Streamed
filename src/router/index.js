import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'
import Verify from '../components/Verification.vue'
import Dashboard from '../components/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/login/verify',
            name: 'Verify',
            component: Verify,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        }
    ],
});

export default router;