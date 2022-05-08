<template>
  <ul class="v-list-empty">
    <template v-for="(item, i) of list">
      <li :key="'list_' + i" class="">
        <slot :item="item"></slot>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.v-list-empty {
  position: relative;
  padding: 0 !important;
}
</style>