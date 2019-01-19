<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <i class="fa fa-envelope"></i>
      <b-badge pill variant="danger">{{itemsCount}}</b-badge>
    </template>
    <template slot="dropdown">
      <div class>
        <b-dropdown-item class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img v-bind:src="avatar" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="success" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small
            class="text-truncate text-muted"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </b-dropdown-item>

        <b-dropdown-item class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="danger" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small
            class="text-truncate text-muted"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </b-dropdown-item>

        <b-dropdown-item class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="info" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small
            class="text-truncate text-muted"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </b-dropdown-item>

        <b-dropdown-item class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="warning" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small
            class="text-truncate text-muted"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </b-dropdown-item>

        <b-dropdown-item class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <b-badge variant="dark" class="avatar-status"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small
            class="text-truncate text-muted"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </b-dropdown-item>
      </div>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  name: "DefaultHeaderDropdownMsg",
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 10, avatar: "img/avatars/vinhpq.png" };
  },
  methods: {
    loadMore() {}
  }
};
</script>
