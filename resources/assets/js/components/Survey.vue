<template>
  <div>
    <div class="title">Khảo sát</div>
    <div>{{md5Msg}}</div>
  </div>
</template>
<script>
import md5 from "js-md5";
export default {
  data: function() {
    return { md5Msg: md5.base64("Giá trị MD5") };
  }
};
</script>
