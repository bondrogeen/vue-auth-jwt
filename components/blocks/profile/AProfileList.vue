<template>
  <a-card-block class="a-profile-list d-flex py-3" :class="{ 'a-profile-list--active': active }">
    <div class="mr-2">
      <AppHeaderIcon size="small">
        <v-icon color="primary" size="20"> {{ icon }} </v-icon>
      </AppHeaderIcon>
    </div>
    <div>
      <div class="a-profile-list__title text-body-1">{{ title }}</div>
      <div class="text-body-2 grey--text">{{ subtitle }}</div>
    </div>
  </a-card-block>
</template>

<script>
import AppHeaderIcon from '@/components/app/header/AppHeaderIcon';
export default {
  name: 'PageProfile',
  components: {
    AppHeaderIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.a-profile-list {
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
  &__title {
    font-weight: 700 !important;
  }
  &:hover {
    background-color: map-get($grey, 'lighten-1');
  }
  &--active {
    background-color: map-get($primary, 'lighten-1');
    border-color: map-get($primary, 'base');
  }
}
</style>
