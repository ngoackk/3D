<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <i class="fa fa-envelope"></i>
      <b-badge pill variant="danger">{{itemsCount}}</b-badge>
    </template>
    <template slot="dropdown">
      <div class="frame">
        <b-dropdown-item class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img v-bind:src="Img.avatar" class="img-avatar" :alt="Img.avatar">
              <b-badge variant="success" class="avatar-status"></b-badge>
            </div>
          </div>
        </b-dropdown-item>
      </div>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
import { Users, Data } from "../apis/api";

export default {
  inject: ["currentUser"],
  name: "DefaultHeaderDropdownMsg",

  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 5 };
  },

  mounted() {},

  computed: {
    Img() {
      if (Users.getCurrent().Image_Url == null) {
        return { avatar: "img/avatars/u2.png" };
      } else {
        return {
          avatar: "http://103.28.37.34:806" + Users.getCurrent().Image_Url
        };
      }
    }
  },

  methods: {
    loadMore() {}
  }
};
</script>
