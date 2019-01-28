<template>
  <div>
    <div>THÔNG TIN SINH VIÊN</div>

    <div>
      <button v-on:click="getUserInfor">Xem thông tin</button>
    </div>

    <div></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    getUserInfor() {
      return new Promise((resolve, reject) => {
        let token = localStorage.getItem("access_token");
        fetch("http://103.28.37.34:806/api/Profile?accessToken=" + token, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
          .then(data => {
            console.log("Lấy dữ liệu thành công ở Profile: ", data);
            resolve(data.json());
            alert("Được rồi");
          })
          .catch(error => {
            console.log("Lấy dữ liệu thất bại ở Profile: ", error);
            reject(error);
          });
      });
    }
  }
};
</script>

