<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <div>
        <div>
          <img :src="Img.avatar" class="img-avatar" :alt="Img.avatar">
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
import { Users } from "../apis/api";
export default {
  inject: ["currentUser"],
  name: "DefaultHeaderDropdownAccnt",
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      itemsCount: 42
    };
  },
  mounted() {
    //console.log(this.currentUser);
  },

  computed: {
    Img() {
      return {
        avatar: Users.getCurrent().Image_Url
      };
    }
  },
  // Hết phần computed
  methods: {
    logout() {
      //clear session, data then go to login

      this.$router.push("/pages/login");
    }
  }
};
</script>
