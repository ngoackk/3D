<template>
  <div>
    <div>
      <span class="title">TIN NHẮN</span>
    </div>
    <div>
      <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
          <b-collapse id="collapse1_inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
    <div>
      <ul>
        <a v-for="mss in this.msg" :key="mss.ID" href="#">
          <li>{{mss.ID}} - {{mss.Tieude}}</li>
          
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
      msg: [],
      msgDetail: []
    };
  },

  mounted() {
    Users.callServer("Chat")
      .then(listThongTin => {
        this.msg = listThongTin;
        console.log(this.msg);
      })

      .catch(err => {
        alert("Lỗi phần dữ liệu Tin nhắn: " + err);
      });

    Users.callServer("Chat", 59).then(lsDetail => {
      this.msgDetail = lsDetail;
      console.log(this.msgDetail);
    });
  },

  computed: {
    Name() {
      return this.currentUser["Ho_ten"];
    }
  },

  methods: {}
};
</script>
