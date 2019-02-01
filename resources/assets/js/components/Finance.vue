<template>
<div class="container">
  <div class="col-xs-12 fullwidth">
    <div>
      <span class="title">THÔNG TIN TÀI CHÍNH</span>
    </div>

    <div class="col-xs-6">
      <div>
        <ul>
          <li v-for="fin in finance" :key="fin.id_mon">{{fin.Ten_mon}}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="fin in finance" :key="fin.id_mon">{{fin.So_tien_da_nop}}</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { Users, Data } from "../apis/api";

export default {
  data: function() {
    return {
      finance: []
    };
  },

  mounted() {
    Users.callServer("Finance")
      .then(fncList => {
        this.finance = fncList;
        
      })
      .catch(err => {
        alert("Lỗi => Thông tin tài chính: ", err);
      });
  },

  methods: {
    total() {
      alert("Tính tổng tiền");
    }
  }
};
</script>
