<template>
  <div class="container login">
    <form id="loginForm" @submit.prevent="login" method="post">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="UserName"
          type="text"
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
          v-model="Password"
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
  </div>
</template>
<script>
import { Users, Data } from "../apis/api";
export default {
  data() {
    return {
      Role: 0,
      UserName: "0123456789",
      Password: "123456789",
      rememberme: false
    };
  },
  mounted() {
    this.logout();
  },
  methods: {
    loginSubmit() {
      this.$store
        .dispatch("user/login", this.form)
        .then(this.success)
        .catch(this.unauthorized);
    },
    success() {
      this.$notify({ group: "alerts", text: this.$t("users.sessions.valid") });
      this.$router.push("/");
    },
    unauthorized() {
      this.$notify({
        group: "alerts",
        text: this.$t("users.sessions.invalid")
      });
    },
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    },
    login() {
      Users.studentLogin({ Role: this.Role, UserName: this.UserName, Password: this.Password })
        .then(result => {
          console.log(result.isSuccess);
         
          if (result.isSuccess) {
            //Luu token vao localStorage cua trinh duyet
            localStorage.setItem("access_token", result.message);
            // goi ham lay du lieu nguoi dung
            Users.getUserInfor()
              .then(user => {
                console.log(user);
                localStorage.setItem("user", JSON.stringify(user));
                this.$router.push("/");
              })
              .catch(err => {
                console.error(err);
              });
          } else {
            console.error(result);
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
