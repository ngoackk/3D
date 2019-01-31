<template>
  <div>
    <div class="col-md-4"><span class="title">KẾT QUẢ HỌC TẬP</span></div>
    <!-- {{this.bangdiem.length}} -->
    <!-- <div v-for="p in bangdiem" :key="p.ID_mon">{{p.Ten_hoc_phan}}</div> -->
    <div class="col-md-4"><span class="subject">Tên môn học</span></div>
    <div class="col-md-2">
      <select class="form-control combobox" name="cmbMonHoc" id="cmbMonHoc">
        <option value="-1">--- Chọn môn học ---</option>

        <option v-for="p in bangdiem" :key="p.ID_mon">{{p.Ten_hoc_phan}}</option>
      </select>
    </div>
  </div>
</template>
<script>
import { Users, Data } from "../apis/api";
export default {
  data: function() {
    return {
      bangdiem: []
    };
  },
  mounted() {
    //console.log("mounted");
    Users.callServer("LearningPoints")
      .then(points => {
        this.bangdiem = points;
        // this.bangdiem.push(points[0]);
        // this.bangdiem.push(points[1]);
      })
      .catch(err => {
        alert(err);
      });
  }
};
</script>
