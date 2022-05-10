<template>
  <nuxt-link class="a-link" :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.a-link {
  text-decoration: none;
  color: black !important;
}
</style>
