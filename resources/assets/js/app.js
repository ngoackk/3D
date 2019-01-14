/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Define route components.
// These can be imported from other files
let Todo = require('./components/Todo.vue');
let Login = require('./components/Login.vue');
let Home = require('./components/Home.vue');
let Finance = require('./components/Finance');
let Result = require('./components/Result');
let Calendar = require('./components/Calendar');
let Survey = require('./components/Survey');
let Messenger = require('./components/Messenger');
let OneGate = require('./components/OneGate');

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [{
    path: '/tasks',
    component: Todo
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
  ,
  {
    path: '/one-gate',
    component: OneGate
  }

  ,
  {
    path: '/calendar',
    component: Calendar
  }

  ,
  {
    path: '/survey',
    component: Survey
  }

  ,
  {
    path: '/messenger',
    component: Messenger
  }
  ,
  {
    path: '/finance',
    component: Finance
  }

  ,
  {
    path: '/result',
    component: Result
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

Vue.use(VueRouter);

Vue.component('navigation', require('./components/Navigation.vue'));
Vue.component('create-task', require('./components/CreateTask.vue'));

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
window.onload = function () {
  const app = new Vue({
    router
  }).$mount('#app');
}

//router.push('/tasks');
// app.initialize();