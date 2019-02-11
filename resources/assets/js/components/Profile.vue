<template>
  <div>
    <div>
      <span class="title">THÔNG TIN SINH VIÊN</span>
    </div>

    <div>
      <span class="title">Họ và tên:</span>
      {{Name}}
    </div>
    <div>
      <span class="title">Mã sinh viên:</span>
      {{StudentNo}}
    </div>
    <div>
      <span class="title">Lớp:</span>
      {{ClassName}}
    </div>

    <div>
      <span class="title">Điện thoại:</span>
      {{Tel}}
    </div>
    <div>
      <span class="title">Email:</span>
      {{Email}}
    </div>

    <div>
      <img :src="user.avatar" class="img-circle" :alt="user.avatar">
    </div>
  </div>
</template>
<script>
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
    },
    Name() {
      return this.user["Ho_ten"];
    },
    imgURL() {
      return this.user["Image_Url"];
    },
    Tel() {
      return this.user["Dien_thoai"];
    },

    Email() {
      return this.user["Email"];
    },
    StudentNo() {
      return this.user["Ma_sv"];
    },
    ClassName() {
      return this.user["Ten_lop"];
    }
  }
}
</script>
