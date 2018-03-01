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

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
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
      path: '/editaccount',
      name: 'EditAccount',
      component: EditAccount
    }
  ],
  mode: 'history'
})
