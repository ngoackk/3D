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
      </form>
      <div class="text-center">
        <button v-b-modal.modal1 class="btn btn-link">[Quên mật khẩu sinh viên]</button>

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
      </div>
    </div>
    <nav class="navbar bg-white fixed-bottom">
      <ul class="nav">
        <li class="nav-item">&copy; 2018</li>
      </ul>
      <ul class="nav justify-content-end">
        <li class="nav-item">NAMVIET.JSC</li>
      </ul>
    </nav>
  </div>
</template>
<script>
import Vue from "vue";
import { Users, Data } from "../apis/api";
import md5 from "js-md5";
export default {
  data() {
    return {
      UserName: "",
      Password: "",
      rememberme: false,
      DeviceId: ""
    };
  },
  mounted() {
    this.logout();
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    },
    login() {
      // Theo tài liệu hướng dẫn của vue-cordova them chiếu tất cả qua biến Vue.cordova.{plugin name}
      // Lưu ý 1 số plugin không còn chạy trên cordova android platform 7 phải chuyển platform android sang 6.4.0
      Users.studentLogin({
        userName: this.UserName,
        password: md5.base64(this.Password),
        deviceid:
          Vue.cordova.device && Vue.cordova.device.uuid
            ? Vue.cordova.device.uuid
            : "ggsgfdgdg"
      })
        .then(response => {
          if (response.isSuccess) {
            localStorage.setItem("access_token", response.message);
            Users.getUserInfor()
              .then(user => {
                localStorage.setItem("user", JSON.stringify(user));
                if (JSON.parse(localStorage.getItem("user") != null)) {
                  this.$router.push("/");
                }
              })
              .catch(err => {
                this.$notify({
                  group: "alerts",
                  text: this.$t("users.sessions.valid")
                });
                console.error(err);
              });
          } else {
            this.$notify({
              group: "alerts",
              text: this.$t("users.sessions.valid")
            });
            console.error(response);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
