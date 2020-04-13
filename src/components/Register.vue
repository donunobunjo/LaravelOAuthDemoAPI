<template>
    <div>
        <h3 class="text-center">Register</h3>
        <div class="row">
        <form @submit.prevent="register">
            <table>
                <tr>
                    <td>Name</td>
                    <td><input type="text" v-model="credential.name"  autofocus required></td>
                </tr>
                 <tr>
                    <td>Email</td>
                    <td><input type="email" v-model="credential.email" required></td>
                </tr>
                <tr>
                    <td>City</td>
                    <td><input type="text" v-model="credential.city" required></td>
                </tr>
                 <tr>
                    <td>Password</td>
                    <td><input type="password" v-model="credential.password" required></td>
                </tr>
                 <tr>
                    <td>Confirm password</td>
                    <td><input type="password" v-model="credential.c_password" required></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Register"></td>
                </tr>
            </table>
        </form>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          credential:{
              name:'',
              email:'',
              city:'',
              password:'',
              c_password:''
          }
        }
  },
  methods:{
      register(){
            this.axios
            .post('http://localhost:8000/api/register',this.credential)
            .then(response=>{
                localStorage.setItem('mytoken',response.data.token)
                localStorage.setItem('myuser',response.data.name)
                localStorage.setItem('mycity',response.data.city)
                if (localStorage.getItem('mytoken')!=null){
                    this.$router.push('/dashboard')
                }
            })
            .catch(error=>{
                console.log(error);
            })
      }
  } 
}
</script>

<style scoped>

</style>
