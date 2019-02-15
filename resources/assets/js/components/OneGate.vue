<template>
  <div>
    <div>
      <span class="title">DỊCH VỤ MỘT CỬA</span>
    </div>
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab" v-for="m in myDB" :key="m.id">
          <b-btn
            block
            v-b-toggle.collapse1
            variant="info"
            id="btnContent"
            v-on:click="getDataById(m.id)"
          >{{m.title}}</b-btn>
        </b-card-header>
      </b-card>

      <b-collapse accordion="myva" id="collapse1" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <span v-for="msd in myDB" :key="msd.ID">
              <div>
                <span class="title">{{user.Ho_ten}}:</span>
                {{msd.content}}
              </div>

              <div>
                <span class="title">Ngày:</span>
                {{msd.date}}
              </div>
            </span>
          </p>
        </b-card-body>
      </b-collapse>
    </div>
  </div>
</template>
<script>
import { Users } from "../apis/api";
export default {
  inject: ["currentUser"],
  result: [],

  data: function() {
    return {
      myDB: [
        {
          id: 1,
          title: "Thông báo nhận thủ tục thi",
          content:
            "Thông báo của giáo vụ khoa về việc hoàn thiện hồ sơ thi học kỳ",
          date: "26/11/2017 07:08:31"
        },
        {
          id: 2,
          title: "Hoàn thiện thủ tục nộp hồ sơ công chứng",
          content: "Thông báo: Mời đến văn phòng khoa để lấy hồ sơ công chứng",
          date: "28/11/2017 07:08:31"
        }
      ]
    };
  },

  methods: {
    
    getDataById(id) {}
  },

  computed: {
    user() {
      return this.currentUser();
    }
  }
};
</script>
