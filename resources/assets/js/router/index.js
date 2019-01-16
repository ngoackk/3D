import Vue from 'vue'
import Router from 'vue-router'

// Containers
import DefaultContainer from '../containers/DefaultContainer'

// Views

import Home from '../components/Home'
import Finance from '../components/Finance'
import StudyPlan from '../components/StudyPlan'
import TestExam from '../components/TestExam'
import Survey from '../components/Survey'
import OneGate from '../components/OneGate'
import Messenger from '../components/Messenger'
import Login2 from '../components/Login'
import Profile from '../components/Profile'
import News from '../components/News'
import ChangePass from '../components/ChangePass'
 
// Views - Pages
import Page404 from '../views/pages/Page404'
import Page500 from '../views/pages/Page500'
import Login from '../views/pages/Login'
import Register from '../views/pages/Register'
// Users
 
Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      redirect: '/home',
      name: 'Main',
      component: DefaultContainer,
      children: [{
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'messenger',
          name: 'Messenger',
          component: Messenger
        },
        {
          path: 'one-gate',
          name: 'OneGate',
          component: OneGate
        },
        {
          path: 'studyplan',
          name: 'StudyPlan',
          component: StudyPlan
        },
        {
          path: 'testplan',
          name: 'TestExam',
          component: TestExam
        },
        {
          path: 'finance',
          name: 'Finance',
          component: Finance
        },
        {
          path: 'news',
          name: 'News',
          component: News
        },
        {
          path: 'survey',
          name: 'Survey',
          component: Survey
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'change-pass',
          name: 'ChangePass',
          component: ChangePass
        },
        
        {
          path: 'login2',
          name: 'Login2',
          component: Login2
        },

      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [{
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})