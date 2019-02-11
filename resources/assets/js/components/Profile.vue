<template>
  <div>
    <div>
      <span class="title">THÔNG TIN SINH VIÊN</span>
    </div>

    <div>
      <span class="title">Họ và tên:</span>
      {{user.Ho_ten}}
    </div>
    <div>
      <span class="title">Mã sinh viên:</span>
      {{user.Ma_sv}}
    </div>
    <div>
      <span class="title">Lớp:</span>
      {{user.Ten_lop}}
    </div>

    <div>
      <span class="title">Điện thoại:</span>
      {{user.Dien_thoai}}
    </div>
    <div>
      <span class="title">Email:</span>
      {{user.Email}}
    </div>

    <div>
      <img :src="user.avatar" class="img-circle" :alt="user.avatar">
    </div>
  </div>
</template>
<script>
import { Users, Date } from "../apis/api";
export default {
  inject: ["currentUser"],
  data() {
    return { 
      success: "Thành công !"    
      };
  },
  mounted() {},

  computed: {
    user(){
      return this.currentUser();
    }
  }
}
</script>
