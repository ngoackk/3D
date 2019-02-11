<template>
  <div>
    <div>
      <span class="title">TIN NHẮN</span>
    </div> 
    <div class="container">
      <div class="row">
        <table width="100%" border="0">
          
            <tr>
              <td width="77%">
                
                    <form class="form-horizontal"   >
                    <!-- Name input-->
                    <div class="form-group" v-show="false">
                      <label class="col-md-3 control-label" for="name">Người gửi</label>
                      <div class="col-md-9">
                          <input id="name" name="name" v-model="Name" type="text" placeholder="Your name" class="form-control">
                      </div>
                    </div>
                    <!-- Email input-->
                    <div class="form-group">
                      <label class="col-md-3 control-label" for="email">Tiêu đề</label>
                      <div class="col-md-9">
                          <input id="email" name="email" type="text" placeholder="Tiêu đề" class="form-control">
                      </div>
                    </div>
                    <!-- Message body -->
                    <div class="form-group">
                      <label class="col-md-3 control-label" for="message">Nội dung</label>
                      <div class="col-md-9">
                          <textarea class="form-control" id="message" name="message" placeholder="Hãy nhập nội dung cần gửi" rows="5"></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <button @click="sendMsg"  class="btn btn-primary btn-md">Gửi</button>
                    </div>
                    <!-- Rating -->
                    </form>
              </td>
          </tr>
      
      </table>
    </div>
    </div> 
  <div class="container">
    <div class="row">
        <div class="col-md-12">
          <div v-for="mss in msg" :key="mss.ID" class="blockquote-box blockquote-warning clearfix">
              <div class="cycle pull-left">
                <img class="img-avatar" :src="user.avatar" />
              </div>
              <b-link v-b-toggle="mss.ID+''">
                {{mss.Tieude}}
              </b-link>
             <b-collapse :id="mss.ID+''" class="mt-2">
              <b-card>
                
                <p class="card-text" v-for="msd in msgDetail[mss.ID+'']" :key="msd.ID">
                  <span>
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
                  </span>
                </p>
              </b-card>
             </b-collapse>
          </div>
          <!-- <div class="blockquote-box blockquote-warning clearfix">
              <div class="square pull-left">
                <span class="glyphicon glyphicon-warning-sign glyphicon-lg"></span>
              </div>
              <h4>
                John Doe
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
              </p>
          </div>
          <div class="blockquote-box blockquote-danger clearfix">
              <div class="square pull-left">
                <span class="glyphicon glyphicon-record glyphicon-lg"></span>
              </div>
              <h4>
                John Doe
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
              </p>
          </div> -->
        </div>
    </div>
  </div>

    <!-- <div>
      <b-btn
        class="m-1"
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
    </div> -->
  </div>
</template>
<script>
import { Users, Date } from "../apis/api";
import { Promise } from 'q';

export default {
  inject: ["currentUser"],
  data() {
    return {
      msg: [],
      msgDetail: {},
      
    };
  },

  mounted() {
    Users.callServer("Chat")
      .then(listThongTin => {
        
        this.msg = listThongTin;
        
        if(this.msg && this.msg.length > 0){
          this.msg.forEach(ms => {
                this.readMsgDetail(ms.ID).then(detail =>{
                  this.$set(this.msgDetail,ms.ID+'',detail)
                  //this.msgDetail[ms.ID+'']= detail;
                  console.log(this.msgDetail)
                  //ms.detail = detail;
                }).catch(err=>{
                  console.log(err)
                })
                //done.push(this.readMsgDetail(ms.ID));
          });
          // Promise.all(done).then(values=>{
          //   console.log(values)
          //   //this.msgDetail = values;
          // }).catch(err=>{
          //   console.log(err)
          // })
         
        }
       
        // console.log(this.msg);
      })

      .catch(err => {
        alert("Lỗi phần dữ liệu Tin nhắn: " + err);
      });
  },

  computed: {
    user(){
      return this.currentUser();
    }, 
    Name() {
      return this.currentUser()["Ho_ten"];
    }
  },

  methods: {
    readMsgDetail(id){
      return  Users.getMsgDetail("Chat", id);
    }, 
    getMsgById(msgID) {
      Users.getMsgDetail("Chat", msgID).then(lsDetail => {
        console.log(lsDetail)
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
<style lang="scss" scoped>

.glyphicon-lg{font-size:3em}
.blockquote-box{border-right:5px solid #E6E6E6;margin-bottom:25px}
.blockquote-box .square{width:100px;min-height:50px;margin-right:22px;text-align:center!important;background-color:#E6E6E6;padding:20px 0}
.blockquote-box.blockquote-primary{border-color:#357EBD}
.blockquote-box.blockquote-primary .square{background-color:#428BCA;color:#FFF}
.blockquote-box.blockquote-success{border-color:#4CAE4C}
.blockquote-box.blockquote-success .square{background-color:#5CB85C;color:#FFF}
.blockquote-box.blockquote-info{border-color:#46B8DA}
.blockquote-box.blockquote-info .square{background-color:#5BC0DE;color:#FFF}
.blockquote-box.blockquote-warning{border-color:#EEA236}
.blockquote-box.blockquote-warning .square{background-color:#F0AD4E;color:#FFF}
.blockquote-box.blockquote-danger{border-color:#D43F3A}
.blockquote-box.blockquote-danger .square{background-color:#D9534F;color:#FFF}
 
 
/*
 * Stars
 */
.rating-gly {
    font-family: 'Glyphicons Halflings';
}
.rating-gly-star {
    font-family: 'Glyphicons Halflings';
    padding-left: 2px;
}

.rating-gly-star .rating-stars:before {
    padding-left: 2px;
}

.rating-lg .rating-gly-star, .rating-lg .rating-gly-star .rating-stars:before {
    padding-left: 4px;
}

.rating-xl .rating-gly-star, .rating-xl .rating-gly-star .rating-stars:before {
    padding-left: 2px;
}

.rating-active {
    cursor: default;
}

.rating-disabled {
    cursor: not-allowed;
}

.rating-uni {
    font-size: 1.2em;
    margin-top: -5px;
}

.rating-container {
    position: relative;
    vertical-align: middle;
    display: inline-block;
    color: #e3e3e3;
    overflow: hidden;
}

.rating-container:before {
    content: attr(data-content);
}

.rating-container .rating-stars {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
    color: #fde16d;
    transition: all 0.25s ease-out;
    -o-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    -webkit-transition: all 0.25s ease-out;
}

.rating-container .rating-stars:before {
    content: attr(data-content);
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
}

.rating-container-rtl {
    position: relative;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
    color: #fde16d;
}

.rating-container-rtl:before {
    content: attr(data-content);
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
}

.rating-container-rtl .rating-stars {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
    color: #e3e3e3;
    transition: all 0.25s ease-out;
    -o-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    -webkit-transition: all 0.25s ease-out;
}

.rating-container-rtl .rating-stars:before {
    content: attr(data-content);
}

/**
 * Rating sizes
 */
.rating-xl {
    font-size: 4.89em;
}

.rating-lg {
    font-size: 3.91em;
}

.rating-md {
    font-size: 3.13em;
}

.rating-sm {
    font-size: 2.5em;
}

.rating-xs {
    font-size: 2em;
}

/**
 * Clear rating button
 */
.star-rating .clear-rating, .star-rating-rtl .clear-rating {
    color: #aaa;
    cursor: not-allowed;
    display: inline-block;
    vertical-align: middle;
    font-size: 60%;
}

.clear-rating-active {
    cursor: pointer !important;
}

.clear-rating-active:hover {
    color: #843534;
}

.star-rating .clear-rating {
    padding-right: 5px;
}

/**
 * Caption
 */
.star-rating .caption, .star-rating-rtl .caption {
    color: #999;
    display: inline-block;
    vertical-align: middle;
    font-size: 55%;
}

.star-rating .caption {
    padding-left: 5px;
}

.star-rating-rtl .caption {
    padding-right: 5px;
}
</style>
