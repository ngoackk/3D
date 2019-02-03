<template>
  <div>
    <div>
      <span class="title">TIN NHẮN</span>
    </div>

    <div>
      <ul>
        <a v-for="mss in this.msg" :key="mss.ID" href="#">
          <li>{{mss.ID, mss.Tieude}}</li>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
import { Users, Date } from "../apis/api";

export default {
  inject: ["currentUser"],
  data() {
    return {
      msg: []
    };
  },

  mounted() {
    Users.callServer("Chat")
      .then(listThongTin => {
        this.msg = listThongTin;
        //console.log(msg);
      })

      .catch(err => {
        alert("Lỗi phần dữ liệu Tin nhắn: " + err);
      });
  },

  computed: {
    Name() {
      return this.currentUser["Ho_ten"];
    }
  }
};
</script>
