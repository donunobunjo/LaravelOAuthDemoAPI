<template>
  <div id="app">
    <div class="container">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
     <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/login" class="nav-item nav-link">Login</router-link>
                </div>
            </div>
      </nav>-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-link to="/">Home</router-link>|||
    <router-link v-if="!isLoggedIn" to="/register">Register</router-link>|||
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <span v-if="isLoggedIn">Hi, {{username}}</span>
    <input v-if="isLoggedIn" type="button" value="logOut" @click.prevent="logout">
    </div>
    <router-view>

    </router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/Login.vue'

export default {
  /*name: 'App',
  components: {
    HelloWorld
  }*/
  data(){
    return {
      isLoggedIn:null,
      username:''
    }
  },
  methods:{
    logout:function(){
      localStorage.removeItem('mytoken')
      localStorage.removeItem('myuser')
      this.isLoggedIn=null
      this.username=''
      this.$router.push('/')
      //console.log('removed')
    }
  },
  mounted:function(){
    this.isLoggedIn=localStorage.getItem('mytoken')
    this.username=localStorage.getItem('myuser')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
