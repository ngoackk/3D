<template>
    <div class="container login">         
      <form id="loginForm">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="username"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password"  type="password" class="form-control"  id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button @click="login" class="btn btn-primary">Submit</button>
      </form>       
    </div>
</template>
<script>
    import {Users, Data} from '../apis/api'
    export default {
        data() {
            return {
               username: 'phamtuanchip@yahoo.de',
               password: '123456789'
            }
        },

        methods: {
            login() {
                 Users.login({username: this.username, password: this.password}).then(response=>{
                     console.log(response)
                     this.$router.push('/tasks')
                 }).catch(error=>{
                     console.error(error)
                 })
            },

            
        }
    }
</script>
