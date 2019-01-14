<template>
  <div class="container login">
    <form id="loginForm" @submit.prevent="login" method="post">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        >
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button @click="login" class="btn btn-primary">Submit</button>
      <button @click="getUserData" class="btn btn-primary">Check me</button>
    </form>
    <i class="fa fa-calendar"></i>
  </div>
</template>
<script>
import { Users, Data } from "../apis/api";
export default {
  data() {
    return {
      email: "tom@example.com",
      password: "test1234",
      rememberme: false
    };
  },
  mounted(){
    this.logout();
  },
  methods: {
    loginSubmit() {
         this.$store.dispatch('user/login', this.form)
        .then(this.success)
        .catch(this.unauthorized)
      },
      success() {
        this.$notify({group: 'alerts', text: this.$t('users.sessions.valid')})
        this.$router.push('/');
      },
      unauthorized() {
        this.$notify({group: 'alerts', text: this.$t('users.sessions.invalid')})
      },
    logout(){
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
    },  
    login() {
      Users.login({ email: this.email, password: this.password })
        .then(response => {
          console.log(response);
          if(response.data){
            localStorage.setItem('access_token', response.data.access_token);
            Data.search('users', '1').then(user=>{
              console.log(user);
               localStorage.setItem("user", JSON.stringify(user));
               this.$router.push("/");
            }).catch(err=>{
               console.error(err);
            })
           
          } else {
            console.error(response);
          }
          
        })
        .catch(error => {
          console.error(error);
        });
    },
    getUserData() {
      Data.search({ key: "abc" })
        .then(data => {
          alert("thanh cong" + data);
        })
        .catch(err => {});
    }
  }
};
</script>
