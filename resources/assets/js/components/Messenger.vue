<template>
  <div>
    <div>
      <span class="title">TIN NHẮN</span>
    </div>

    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="exampleInputGroup1"
          label="Tiêu đề:"
          label-for="exampleInput1"
          description="Nhập tiêu đề"
        >
          <b-form-input
            id="exampleInput1"
            type="text"
            v-model="form.title"
            required
            placeholder="Phải nhập tiêu đề"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup2" label="Nội dung:" label-for="exampleInput2">
          <b-form-textarea
            id="exampleInput2"
            v-model="form.content"
            required
            placeholder="phải nhập nội dung"
            :rows="3"
            :max-rows="20"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group id="exampleInputGroup3" label="Gửi tới:" label-for="exampleInput3">
          <b-form-select id="exampleInput3" :options="foods" required v-model="form.food"></b-form-select>
        </b-form-group>
        <b-form-group id="exampleGroup4">
          <b-form-radio-group v-model="form.selected" id="exampleChecks">
            <b-form-radio value="first">Hỏi đáp</b-form-radio>
            <b-form-radio value="second">Góp ý</b-form-radio>
            <b-form-radio value="third">Báo lỗi</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Gửi</b-button>
        <b-button type="reset" variant="danger">Làm lại</b-button>
      </b-form>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div v-for="mss in msg" :key="mss.ID" class="blockquote-box blockquote-warning clearfix">
            <div class="cycle pull-left">
              <img class="img-avatar" :src="user.avatar">
            </div>
            <b-link v-b-toggle="mss.ID+''">{{mss.Tieude}}</b-link>
            <b-collapse :id="mss.ID+''" class="mt-2">
              <b-card>
                <p class="card-text" v-for="msd in msgDetail[mss.ID+'']" :key="msd.ID">
                  <span>
                    <div>
                      <span class="title">Người gửi:</span>
                      <span v-html="msd.Nguoi_gui"></span>
                    </div>

                    <div>
                      <span class="title">Nội dung:</span>
                      <p v-html="msd.Noi_dung"></p>
                    </div>

                    <div>
                      <span class="title">Người nhận:</span>
                      {{msd.Nguoi_nhan}}
                    </div>
                    <div>
                      <span class="title">Ngày gửi:</span>
                      {{msd.NgayGui}}
                    </div>
                    <div>------</div>
                  </span>
                </p>
              </b-card>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Users } from "../apis/api";

export default {
  inject: ["currentUser"],
  data() {
    return {
      msg: [],
      msgToSend: [],
      msgDetail: {},
      receiverlist: [],
      form: {
        title: "",
        content: "",
        food: null,
        checked: [],
        selected: "first"
      },
      foods: [
        { text: "--Chọn--", value: null },
        "Phòng giáo vụ",
        "Ban học viên",
        "Phòng công nghệ",
        "Phòng kế toán"
      ],
      show: true
    };
  },

  mounted() {
    Users.callServer("Chat")
      .then(listThongTin => {
        this.msg = listThongTin;

        if (this.msg && this.msg.length > 0) {
          this.msg.forEach(ms => {
            this.readMsgDetail(ms.ID)
              .then(detail => {
                this.$set(this.msgDetail, ms.ID + "", detail);
              })
              .catch(err => {
                this.$Hub.$emit("notification", { type: "error", msg: err });
              });
          });
        }
      })

      .catch(err => {
        //alert("Lỗi phần dữ liệu Tin nhắn: " + err);
        this.$Hub.$emit("notification", { type: "error", msg: err });
      });

    //Lấy danh sách người nhận messenger
    Users.callServer("Receiverid")
      .then(rList => {
        this.receiverlist = rList;
        console.log(this.receiverlist[0].Phong);
      })
      .catch(err => {
        console.error(err);
        //alert(err);
      });
  },

  computed: {
    user() {
      return this.currentUser();
    },
    Name() {
      return this.currentUser()["Ho_ten"];
    }
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.msgToSend = {};

      //alert(JSON.stringify(this.form));
      //Thu test gui tin nhan update js data
      this.msgToSend = {
        title: this.form.title,
        content: this.form.content,
        send_date: new Date(),
        receiverid: this.receiverlist[0].ID_nguoi_nhan
      };

      alert(JSON.stringify(this.msgToSend));

      Users.postMessenger(this.msgToSend);
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.title = "";
      this.form.content = "";
      this.form.food = null;
      this.form.checked = [];
      this.selected = "first";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    readMsgDetail(id) {
      return Users.getMsgDetail("Chat", id);
    },
    getMsgById(msgID) {
      Users.getMsgDetail("Chat", msgID).then(lsDetail => {
        this.msgDetail = lsDetail;
        //console.log("Dữ liệu tin nhắn chi tiết: ", this.msgDetail);
      });
    },

    sendMsg() {
      //alert("Đã gửi: " + msgToSend);
      this.$Hub.$emit("notification", {
        type: "success",
        msg: "Đã gửi : " + this.msgToSend
      });
    }
  }
};
</script>
 
 
