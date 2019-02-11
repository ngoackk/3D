<template>
  <div>
    <div>
      <span class="title">TIN NHẮN</span>
    </div>

    <div>
      <b-btn class="m-1"
        v-for="m in msg"
        :key="m.ID"
        v-b-toggle.collapse1
        variant="primary"
        id="btnContent"
        v-on:click="getMsgById(m.ID)"
      >{{m.Tieude}}</b-btn>

      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <p class="card-text" v-for="msd in msgDetail" :key="msd.ID">
            <span>
              <div>
                <span class="title">Người gửi: {{msd.NguoiGui}}</span>
                <span v-html="msd.Noi_dung"></span>
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

          <b-btn v-b-toggle.collapse1_inner size="sm">Bắt đầu gửi tin nhắn</b-btn>
          <b-collapse id="collapse1_inner" class="mt-2">
            <b-card>
              <div>
                <form>
                  <textarea size="200" placeholder="Mời nhập vào tin nhắn"></textarea>
                  <div>
                    <b-btn v-on:click="sendMsg(message)">Gửi</b-btn>
                  </div>
                </form>
              </div>
            </b-card>
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
      return this.currentUser()["Ho_ten"];
    }
  },

  methods: {
    getMsgById: function(msgID) {
      Users.getMsgDetail("Chat", msgID).then(lsDetail => {
        this.msgDetail = lsDetail;
        //console.log("Dữ liệu tin nhắn chi tiết: ", this.msgDetail);
      });
    },

    sendMsg: function(msgToSend) {
      alert("Đã gửi: " + msgToSend);
    }
  }
};
</script>
