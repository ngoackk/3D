<template>
  <div>
    <div class="title">Khảo sát</div>

    <div class="title">{{curr.Ho_ten}}</div>
  </div>
</template>
<script>
import { Users } from "../apis/api";
export default {
  data: function() {
    return { success: "Thành công" };
  },

  computed: {
    curr() {
      return Users.getCurrent();
    }
  }
};
</script>
