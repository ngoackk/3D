<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile/>
      <b-link class="navbar-brand" to="/home">
        <img class="navbar-brand-full" src="img/logo-f.png" width="30" height="30" alt="hau.edu.vn">
        <img
          class="navbar-brand-minimized"
          src="img/logo-f.png"
          width="30"
          height="30"
          alt="hau.edu.vn"
        >
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg"/>
      <!-- <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>
        <b-nav-item class="px-3">Settings</b-nav-item>
      </b-navbar-nav>-->
      <b-navbar-nav class="ml-auto">
        <div class="title">ĐẠI HỌC KIẾN TRÚC HÀ NỘI</div>

        <!-- <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>-->
        <!-- <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>-->
        <DefaultHeaderDropdownMsg/>
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
      <!-- <AsideToggler class="d-none d-lg-block" /> -->
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <!-- <Breadcrumb :list="list"/> -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="https://hau.edu.vn">Đại học Kiến trúc Hà Nội</a>
        <span class="ml-1">&copy; 2018 .</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="http://namvietjsc.edu.vn">NAMVIET.JSC</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from "./_nav";
import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  AsideToggler,
  Footer as TheFooter,
  Breadcrumb
} from "@coreui/vue";
import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";
import DefaultHeaderDropdownMsg from "./DefaultHeaderDropdownMsg";

export default {
  provide: {
    currentUser: JSON.parse(localStorage.getItem("user"))
  },
  name: "DefaultContainer",
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    // Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    DefaultHeaderDropdownMsg,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data() {
    return {
      nav: nav.items
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        route => route.name || route.meta.label
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.app-header {
  .navbar-brand {
    margin: 0;
    top: 0;
    left: 50px;
    width: 0px;
  }
}
</style>