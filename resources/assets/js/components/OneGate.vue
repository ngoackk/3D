<template>
  <div>
    <div>
      <span class="title">DỊCH VỤ MỘT CỬA</span>
    </div>
  </div>
</template>
<script>
import { Users } from "../apis/api";
export default {
  name: "App",
  inject: ["currentUser"],

  data() {
    return { success: "Dịch vụ một cửa" };
  },

  methods: {},

  computed: {
    user() {
      return this.currentUser();
    }
  }
};
</script>
