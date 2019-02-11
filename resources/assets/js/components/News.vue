<template>
  <div>
    <div>
      <span class="title">BẢN TIN</span>
    </div>

    <div>
      <ul>
        <a v-for="mss in msg" :key="mss.ID" href="#">
          <li>{{mss.Tieu_de}}</li>
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
    Users.callServer("Notification")
      .then(msgList => {
        this.msg = msgList;
      })

      .catch(err => {
        alert(err);
      });
  },

  computed: {}
};
</script>
