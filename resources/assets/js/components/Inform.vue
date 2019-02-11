<template>
  <div>
    <div></div>
    <div>
      <h5>ESSOFT VERSION 1.0</h5>
    </div>

    <div class="title">Phát triển bởi: Công ty Cổ phần</div>
    <div class="title">Giải pháp Giáo dục - Y tế Nam Việt</div>
    <div class="title">Website: http://namvietjsc.edu.vn</div>
    <div class="title">Hotline: 0912681066</div>
  </div>
</template>


<script>
import { Users } from "../apis/api";

export default {
  computed: {
    curr() {
      return Users.getCurrent();
    }
  }
};
</script>