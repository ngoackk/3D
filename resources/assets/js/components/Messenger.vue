<template>
  <div>
    <div>
      <span class="title">TIN NHẮN</span>
    </div>
    <div>
      <b-btn
        v-for="m in msg"
        :key="m.ID"
        v-b-toggle.collapse1
        variant="primary"
        id="btnContent"
        v-on:click="getMsgById(m.ID)"
      >{{m.Tieude}}</b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text">
            <span v-for="msd in msgDetail" :key="msd.ID">
              <div>
                <span class="title">{{currentUser["Ho_ten"]}}:</span>
                {{msd.Noi_dung}}
              </div>

              <div>
                <span class="title">Người nhận:</span>
                {{msd.Nguoi_nhan}}
              </div>
              <div>
                <span class="title">Ngày gửi:</span>
                {{msd.NgayGui}}
              </div>
            </span>
          </p>
          <b-btn v-b-toggle.collapse1_inner size="sm">Bắt đầu</b-btn>
          <b-collapse id="collapse1_inner" class="mt-2">
            <b-card>Xin chào</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
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
        // console.log(this.msg);
      })

      .catch(err => {
        alert("Lỗi phần dữ liệu Tin nhắn: " + err);
      });
  },

  computed: {
    Name() {
      return this.currentUser["Ho_ten"];
    }
  },

  methods: {
    getMsgById: function(msgID) {
      Users.getMsgDetail("Chat", msgID).then(lsDetail => {
        this.msgDetail = lsDetail;
        // console.log("Dữ liệu tin nhắn chi tiết: ", this.msgDetail);
      });
    }
  }
};
</script>
