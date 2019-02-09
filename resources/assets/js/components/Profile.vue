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
      <img :src="img.avatar" class="img-circle" :alt="img.avatar">
    </div>
  </div>
</template>
<script>
export default {
  inject: ["currentUser"],

  data() {
    return { success: "Thành công !" };
  },
  mounted() {},

  computed: {
    Name() {
      return this.currentUser["Ho_ten"];
    },
    imgURL() {
      return this.currentUser["Image_Url"];
    },
    Tel() {
      return this.currentUser["Dien_thoai"];
    },

    Email() {
      return this.currentUser["Email"];
    },
    StudentNo() {
      return this.currentUser["Ma_sv"];
    },

    ClassName() {
      return this.currentUser["Ten_lop"];
    },

    img() {
      if (this.currentUser["Image_Url"] == null) {
        return { avatar: "img/avatars/vinhpq.png" };
      } else {
        return {
          avatar: "http://103.28.37.34:806" + this.currentUser["Image_Url"]
        };
      }
    }
  }
};
</script>
