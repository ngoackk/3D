<template>
  <div class="login">
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <nav class="navbar bg-white justify-content-center fix-top">
      <a class="navbar-brand" href="#">
        <img src="img/logo-f.png" alt="Logo" class="logo">
      </a>
      <div class="title">ĐẠI HỌC KIẾN TRÚC HÀ NỘI</div>
    </nav>
    <div class="container">
      <img class="img-fluid mx-auto d-block" src="img/banner.jpg">
      <form id="loginForm" @submit.prevent="login" method="post">
        <div class="form-group">
          <label for="exampleInputEmail1">Tài khoản</label>
          <input
            v-model="UserName"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Tài khoản"
          >
          <!-- <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>-->
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Mật khẩu</label>
          <input
            v-model="Password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Mật khẩu"
          >
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Lưu mật khẩu</label>
        </div>
        <button @click="login" class="btn btn-primary btn-block">Đăng nhập</button>
        <!-- <button @click="getUserData" class="btn btn-primary">Check me</button> -->
        <div class="text-center">
          <button v-b-modal.modal1 class="btn btn-link">[Quên mật khẩu sinh viên]</button>
          <!-- <b-btn v-b-modal.modal1>Launch demo modal</b-btn> -->
        </div>
        <!-- Modal Component -->
        <b-modal id="modal1" centered title="Lấy lại mật khẩu">
          <p
            class="my-4"
          >Mật khẩu mới sẽ được gửi vào mail bạn đã đăng ký với nhà trường!</p>
          <input type="text" class="form-control" id="txtMaSV" placeholder="Mã sinh viên">
          <div slot="modal-footer" class="w-100">
            <b-btn
              class="float-right btn-block"
              variant="primary"
              @click="show=false"
            >Lấy lại mật khẩu</b-btn>
          </div>
        </b-modal>
      </form>
    </div>
    <nav class="navbar bg-white fixed-bottom">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">&copy; 2018</a>
        </li>
      </ul>
      <ul class="nav justify-content-end">
        <li class="nav-item">NAMVIET.JSC</li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { Users, Data } from "../apis/api";
import md5 from "js-md5";
export default {
  data() {
    return {
      //Role: 0,
      UserName: "",
      Password: "",
      encrypted: "",
      rememberme: false
    };
  },
  mounted() {
    this.logout();
  },
  watch: {
    Password(newVal, oldVal) {
      this.encrypted = md5.base64(newVal);
      //console.log(this.encrypted)
    }
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
      Users.studentLogin({
        //Role: this.Role,
        UserName: this.UserName,
        Password: md5.base64(this.Password)
      })
        .then(response => {
          // console.log(response);
          if (response.isSuccess) {
            localStorage.setItem("access_token", response.message);
            Users.getUserInfor()
              .then(user => {
                //console.log(user);
                localStorage.setItem("user", JSON.stringify(user));

                if (JSON.parse(localStorage.getItem("user") != null)) {
                  this.$router.push("/");
                }
              })
              .catch(err => {
                console.error(err);
              });
          } else {
            console.error(response);
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    getUserData() {
      Data.search({ ID: "59" })
        .then(data => {
          alert("thanh cong" + data);
        })
        .catch(err => {});
    }
  }
};
</script>
