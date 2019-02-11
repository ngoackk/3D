<template>
  <div>
    <div>
      <span class="title">THÔNG TIN SINH VIÊN</span>
    </div>

    <div>
      <span class="title">Họ và tên:</span>
      {{curr.Ho_ten}}
    </div>
    <div>
      <span class="title">Mã sinh viên:</span>
      {{curr.Ma_sv}}
    </div>
    <div>
      <span class="title">Lớp:</span>
      {{curr.Ten_lop}}
    </div>

    <div>
      <span class="title">Điện thoại:</span>
      {{curr.Dien_thoai}}
    </div>
    <div>
      <span class="title">Email:</span>
      {{curr.Email}}
    </div>

    <div>
      <img :src="curr.Image_Url" class="img-circle" :alt="curr.Image_Url">
    </div>
  </div>
</template>
<script>
import { Users, Date } from "../apis/api";
export default {
  data() {
    return { success: "Thành công !" };
  },
  mounted() {},

  computed: {
    curr() {
      return Users.getCurrent();
    }
  }
};
</script>
