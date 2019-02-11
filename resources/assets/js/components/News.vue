<template>
  <div>
    <div>
      <span class="title">BẢN TIN</span>
    </div>
    <div v-for="mss in msg" :key="mss.ID">
         
          <b-link v-b-toggle="mss.ID+''" >{{mss.Tieu_de}}</b-link>
          <b-collapse :id="mss.ID+''" class="mt-2">
            <b-card>
              <p class="card-text" v-html="mss.Noi_dung" ></p>
              
            </b-card>
          </b-collapse>
         

    </div>
    <div>
      
      <ul>
        <li v-for="mss in msg" :key="mss.ID">
           <router-link :to="'/news/'+ mss.ID">
             {{mss.Tieu_de}}
           </router-link>
        </li>
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
        console.log(msgList)
        this.msg = msgList;
      })

      .catch(err => {
        alert(err);
      });
  },

  computed: {
    Name() {
      return this.currentUser()["Ho_ten"];
    }
  }
};
</script>
