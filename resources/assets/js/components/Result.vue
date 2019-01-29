<template>
  <div>
    Kết quả học tập:
    {{this.bangdiem.length}}
    <div v-for="p in bangdiem" :key="p.ID_mon">{{p}}</div>
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
    console.log("mounted");
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
