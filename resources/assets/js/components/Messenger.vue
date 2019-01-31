<template>
  <div>
    <div>TIN NHẮN</div>
    <div></div>
  </div>
</template>
<script>
export default {
  inject: ["currentUser"],
  data() {
    return {};
  },
  computed: {
    Name() {
      return this.currentUser["Ho_ten"];
    }
  }
};
</script>
