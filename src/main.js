import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
//Vue.use(axios)
Vue.use(VueAxios,axios)
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:Dashboard,
      beforeEnter:function(to,from,next){
        if (localStorage.getItem('mytoken')==null){
            //next(false)
            next({name:'login'})
        }
        else{
          next()
        }
      }
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
