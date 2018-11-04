import Vue from 'vue'
// VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// dashboard
import DashboardIndex from './dashboard/pages/Index'
import DashboardSample from './dashboard/pages/Sample'
// user
import UserIndex from './users/pages/Index'

const routes = [
    { path: '/dashboard', name: 'dashboard', component: DashboardIndex },
    //{ path: '/dashboard/sample', name: 'dashboard.sample', component: DashboardSample },
    { path: '/users', name: 'users', component: UserIndex },
]

const router = new VueRouter({ 
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})

export default router;