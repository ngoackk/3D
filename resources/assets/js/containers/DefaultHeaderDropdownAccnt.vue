<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <div>
        <div>{{currentUser.Ho_ten}}</div>

        <div>
          <!-- {{currentUser.Image_Url}} -->
          <img :src="imgLink" class="img-avatar" :alt="imgLink">
        </div>
      </div>
    </template>
    <template slot="dropdown">
      <b-dropdown-item @click="$router.push('/profile')">
        <i class="fa fa-user"/>Tài khoản
      </b-dropdown-item>
      <b-dropdown-item @click="$router.push('/change-pass')">
        <i class="fa fa-key"/> Đổi mật khẩu
      </b-dropdown-item>

      <b-dropdown-item @click="logout">
        <i class="fa fa-lock"/>
        Đăng xuất
      </b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  inject: ["currentUser"],
  name: "DefaultHeaderDropdownAccnt",
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      itemsCount: 42,
      imgLink: "http://103.28.37.34:806/FileManager/Upload/avata/anh1.jpg"
    };
  },
  mounted() {
    //console.log(this.currentUser);
  },
  methods: {
    logout() {
      //clear session, data then go to login
      this.$router.push("/pages/login");
    }
  }
};
</script>
