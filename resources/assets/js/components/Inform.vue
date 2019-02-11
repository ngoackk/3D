<template>
  <div>
    <div>{{kk}}</div>
    <div>
      <button v-on:click="kk">SHOW ME</button>
    </div>
  </div>
</template>


<script>
import { Users } from "../apis/api";

export default {
  computed: {
    kk() {
      return Users.getCurrent();
    }
  }
};
</script>