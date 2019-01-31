<template>
  <div>
    <div>LÝ LỊCH SINH VIÊN</div>

    <div>Họ và tên:{{currentUser.Ho_ten}}</div>
    <div>
      <img :src="imgCurrent" class="img-circle">
    </div>
  </div>
</template>
<script>
export default {
  inject: ["currentUser"],
  data: () => {
    return {
      imgCurrent: "http://103.28.37.34:806/FileManager/Upload/avata/anh1.jpg"
    };
  },
  computed: {
    Name() {
      return this.currentUser["Ho_ten"];
    }
  }
};
</script>
