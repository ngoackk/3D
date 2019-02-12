<template>
  <div>
    <div class="title">KHẢO SÁT</div>

    <div class="title">{{user.Ho_ten}}</div>
  </div>
</template>
<script>
import { Users } from "../apis/api";

export default {
  inject: ["currentUser"],
  data: function() {
    return { success: "Thành công" };
  },

  computed: {
    user() {
      return this.currentUser();
    }
  }
};
</script>
