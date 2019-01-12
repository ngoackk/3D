<template>
  <div id="deviceready">
    <div class="header">
      {{User.Name}}
      <input v-model="User.Name">
      <table class="logo">
        <tr>
          <td>
            <button type="button" class="btn_menu" id="menubutton">
              <div>
                <img src="img/menu.png" width="100%">
              </div>
            </button>
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
              <button type="button" class="btn btn-info">
                <div>
                  <img src="img/mess.png" alt="Tin nhắn" height="45">
                </div>
                <div>Tin nhắn</div>
              </button>
            </div>
          </td>
          <td colspan="1">
            <div>
              <button type="button" class="btn btn-info button1">
                <div>
                  <img src="img/calenda_rong.png" alt="Lịch học / Lịch thi" height="45">
                </div>
                <div>Lịch học</div>
              </button>
            </div>
          </td>
          <td colspan="1">
            <div>
              <button type="button" class="btn btn-info button1">
                <div>
                  <img src="img/calenda_rong.png" alt="Lịch học / Lịch thi" height="45">
                </div>
                <div>Lịch học</div>
              </button>
            </div>
          </td>
          <td colspan="1">
            <div>
              <buton type="button" class="btn btn-info">
                <div>
                  <img src="img/result.png" alt="Kết quả học tập" height="45">
                </div>
                <div>Kết quả</div>
              </buton>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div>
              <buton type="button" class="btn btn-info">
                <div>
                  <img src="img/1gate.png" alt="Một cửa" height="45">
                </div>
                <div>Một cửa</div>
              </buton>
            </div>
          </td>
          <td colspan="1">
            <div>
              <buton type="button" class="btn btn-info">
                <div>
                  <img src="img/survey.png" alt="Khảo sát" height="45">
                </div>
                <div>Khảo sát</div>
              </buton>
            </div>
          </td>
          <td>
            <div>
              <buton type="button" class="btn btn-info">
                <div>
                  <img src="img/taichinh.png" alt="Tài chính" height="45">
                </div>
                <div>Tài chính</div>
              </buton>
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
    mt1() {},
    mt2() {}
  }
};
</script>
