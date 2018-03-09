import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Edit from '@/components/Edit'
import EditStory from '@/components/EditStory'
import EditPerks from '@/components/EditPerks'
import EditAbout from '@/components/EditAbout'
import About from '@/components/About'
import Contact from '@/components/Contact'
import EditAccount from '@/components/EditAccount'
import NewCampaign from '@/components/NewCampaign'
import MyCampaign from '@/components/MyCampaign'
import AspirantDashboard from '@/components/AspirantDashboard'
import cp from '@/components/cp'
import Explore from '@/components/Explore'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Index
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/edit',
            name: 'Edit',
            component: Edit
        },
        {
            path: '/editstory',
            name: 'EditStory',
            component: EditStory
        },
        {
            path: '/editperks',
            name: 'EditPerks',
            component: EditPerks
        },
        {
            path: '/editabout',
            name: 'EditAbout',
            component: EditAbout
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/editaccount',
            name: 'EditAccount',
            component: EditAccount
        },
        {
            path: "/add",
            secure: true,
            name: NewCampaign,
            component: NewCampaign
        },
        {
            path: "/campaign",
            name: MyCampaign,
            component: MyCampaign
        },
        {
            path: "/aspirant/:id",
            name: AspirantDashboard,
            component: AspirantDashboard
        },
        {
            path: "/cp",
            name: cp,
            component: cp
        },
        {
            path: "/explore",
            name: Explore,
            component: Explore
        },
        {
            path: "*",
            name: NotFound,
            component: NotFound
        },
    ],
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

// router.beforeEach((to, from, next) => {
//     router.options.routes.forEach((routes) => {
//         if (to.matched[0].path === route.path && route.secure) {
//             router.app.$http.post('/login').catch((response) => {
//                 router.app.$session.destroy();
//                 return next('/');
//             });
//         }
//     });
// });