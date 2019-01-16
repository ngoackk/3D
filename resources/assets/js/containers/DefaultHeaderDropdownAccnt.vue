<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@test.com" />
    </template>
    <template slot="dropdown">
       
      
      <b-dropdown-item @click="$router.push('/profile')"><i class="fa fa-user" />Tài khoản</b-dropdown-item>
      <b-dropdown-item  @click="$router.push('/change-pass')"><i class="fa fa-key" /> Đổi mật khẩu</b-dropdown-item>
      
      <b-dropdown-item  @click="logout"><i class="fa fa-lock" />        
        Đăng xuất
      </b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    logout(){
      //clear session, data then go to login
      this.$router.push("/pages/login")
    }
  }

}
</script>
