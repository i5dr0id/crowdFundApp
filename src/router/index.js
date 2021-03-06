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
import EditAccount from '@/components/EditAccount'
import NewCampaign from '@/components/NewCampaign'
import MyCampaign from '@/components/MyCampaign'
import AspirantDashboard from '@/components/AspirantDashboard'
import cp from '@/components/cp'
import Explore from '@/components/Explore'
import NotFound from '@/components/NotFound'
import About from '@/components/About'
import Update from '@/components/UpdateCampaign'
import Notfound from '@/components/NotFound'

Vue.use(Router)

const router = new Router({
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
			path: '/edit/:id',
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
			path: '/editaccount',
			name: 'EditAccount',
			component: EditAccount
		},
		{
			path: "/add",
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
		{
			path: "/about",
			name: About,
			component: About
		}, {
			path: "/update/:id",
			name: Update,
			component: Update
		}, {
			path: "/notFound",
			name: Notfound,
			component: Notfound
		}

	],
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})

// const router = new Router;


router.beforeEach((to, from, next) => {
	if (!to.matched.length) {
		next('/notFound');
	} else {
		next();
	}
})


export default router;