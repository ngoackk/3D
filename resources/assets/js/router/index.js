import Vue from 'vue'
import Router from 'vue-router'

// Containers
import DefaultContainer from '../containers/DefaultContainer'

// Views

import Home from '../components/Home'
import Finance from '../components/Finance'
import Calendar from '../components/Calendar'
import Survey from '../components/Survey'
import OneGate from '../components/OneGate'
import Messenger from '../components/Messenger'
import Login2 from '../components/Login'

// import Dashboard from '../views/Dashboard'
// import Colors from '../views/theme/Colors'
// import Typography from '../views/theme/Typography'

// import Charts from '../views/Charts'
// import Widgets from '../views/Widgets'

// // Views - Components
// import Cards from '../views/base/Cards'
// import Forms from '../views/base/Forms'
// import Switches from '../views/base/Switches'
// import Tables from '../views/base/Tables'
// import Tabs from '../views/base/Tabs'
// import Breadcrumbs from '../views/base/Breadcrumbs'
// import Carousels from '../views/base/Carousels'
// import Collapses from '../views/base/Collapses'
// import Jumbotrons from '../views/base/Jumbotrons'
// import ListGroups from '../views/base/ListGroups'
// import Navs from '../views/base/Navs'
// import Navbars from '../views/base/Navbars'
// import Paginations from '../views/base/Paginations'
// import Popovers from '../views/base/Popovers'
// import ProgressBars from '../views/base/ProgressBars'
// import Tooltips from '../views/base/Tooltips'

// // Views - Buttons
// import StandardButtons from '../views/buttons/StandardButtons'
// import ButtonGroups from '../views/buttons/ButtonGroups'
// import Dropdowns from '../views/buttons/Dropdowns'
// import BrandButtons from '../views/buttons/BrandButtons'

// // Views - Icons
// import Flags from '../views/icons/Flags'
// import FontAwesome from '../views/icons/FontAwesome'
// import SimpleLineIcons from '../views/icons/SimpleLineIcons'
// import CoreUIIcons from '../views/icons/CoreUIIcons'

// // Views - Notifications
// import Alerts from '../views/notifications/Alerts'
// import Badges from '../views/notifications/Badges'
// import Modals from '../views/notifications/Modals'

// Views - Pages
import Page404 from '../views/pages/Page404'
import Page500 from '../views/pages/Page500'
import Login from '../views/pages/Login'
import Register from '../views/pages/Register'
// Users
// import Users from '../views/users/Users'
// import User from '../views/users/User'

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Main',
      component: DefaultContainer,
      children: [
        {
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
          path: 'calendar',
          name: 'Calendar',
          component: Calendar
        },   
        {
          path: 'finance',
          name: 'Finance',
          component: Finance
        },    
        {
          path: 'messenger',
          name: 'Messenger',
          component: Messenger
        },     
        {
          path: 'survey',
          name: 'Survey',
          component: Survey
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
        render (c) { return c('router-view') }
      },
      children: [
        {
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
