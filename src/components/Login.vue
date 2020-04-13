<template>
    <div>
        <h3 class="text-center">Login</h3>
        <div class="row">
        <form>
            <table>
                <tr>
                    <td>Email</td>
                    <td><input type="email" v-model="loginCred.email" autofocus required></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" v-model="loginCred.password" required></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="login" @click.prevent="login"></td>
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
            loginCred:{
                email:'',
                password:''
            }
        }
    },
    methods: {
        login(){
            this.axios
            .post('http://localhost:8000/api/login',this.loginCred)
            .then(response=>{
                if (response.data.msg!=='Invalid credentials'){
                    localStorage.setItem('mytoken',response.data.token)
                    localStorage.setItem('myuser',response.data.name)
                    localStorage.setItem('mycity',response.data.city)
                    if (localStorage.getItem('mytoken')!=null){
                        this.$router.push('/dashboard')
                        console.log('redirect')
                    }
                }
                else{
                    localStorage.removeItem('mytoken');
                }
            })
            .catch(error=>{
                console.log(error)
            })
            
        }
    }
}
</script>

<style scoped>

</style>