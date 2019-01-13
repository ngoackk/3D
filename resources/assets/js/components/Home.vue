<template>
  <div id="deviceready">
    <div class="header">     
    
      <table class="logo">
        <tr>
          <td>
            
          </td>
          <td>
            <img src="img/logo.png" alt="Tin nhắn" height="80">
          </td>
          <td>
            <div>TRƯỜNG ĐẠI HỌC KIẾN TRÚC HÀ NỘI</div>
            <div>HANOI ARCHITECHTURE UNIVERSITY</div>
          </td>
        </tr>
      </table>
    </div>

    <div style="text-align:center; width: 100%;">
      <div>
        <img src="img/banner.jpg" width="100%">
      </div>
      <table class="table table-bordered">
        <tr>
          <td>
            <div>
              <button  @click="goto('/messenger')" type="button" class="btn btn-info">
                <div>
                  <img src="img/mess.png" alt="Tin nhắn" height="45">
                </div>
                <div>Tin nhắn</div>
              </button>
            </div>
          </td>
          <td colspan="1">
            <div>
              <button  @click="goto('/calendar')"  type="button" class="btn btn-info button1">
                <div>
                  <img src="img/calenda_rong.png" alt="Lịch học / Lịch thi" height="45">
                </div>
                <div>Lịch học</div>
              </button>
            </div>
          </td>
          <td colspan="1">
            <div>
              <button @click="goto('/calendar')" type="button" class="btn btn-info button1">
                <div>
                  <img src="img/calenda_rong.png" alt="Lịch học / Lịch thi" height="45">
                </div>
                <div>Lịch học</div>
              </button>
            </div>
          </td>
          <td colspan="1">
            <div>
              <button @click="goto('/result')" type="button" class="btn btn-info">
                <div>
                  <img src="img/result.png" alt="Kết quả học tập" height="45">
                </div>
                <div>Kết quả</div>
              </button>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <button  @click="goto('/one-gate')"  type="button" class="btn btn-info">
                <div>
                  <img src="img/1gate.png" alt="Một cửa" height="45">
                </div>
                <div>Một cửa</div>
              </button>
            </div>
          </td>
          <td colspan="1">
            <div>
              <button @click="goto('/survey')" type="button" class="btn btn-info">
                <div>
                  <img src="img/survey.png" alt="Khảo sát" height="45">
                </div>
                <div>Khảo sát</div>
              </button>
            </div>
          </td>
          <td>
            <div>
              <button @click="goto('/finance')" type="button" class="btn btn-info">
                <div>
                  <img src="img/taichinh.png" alt="Tài chính" height="45">
                </div>
                <div>Tài chính</div>
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <p class="event listening">Đang kết nối thiết bị</p>
    <p class="event received"></p>
  </div>
</template>
<script>
import { Users, Data } from "../apis/api";
export default {
  data() {
    return {
      User: {
        Name: ""
      },
      Points: [],
      Bank: {}
    };
  },
  created() {},
  mounted() {
    this.User.Name = "pham";
  },
  methods: {
    goto(url){
      this.$router.push(url);
    },
    mt1() {},
    mt2() {}
  }
};
</script>
