<template>
  <div class="a-tabs">
    <template v-for="(item, i) of list">
      <div :key="`item_${i}`" class="a-tabs__item" :class="{ 'a-tabs__item--active': isActive(item) }">
        <slot :item="item"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
  methods: {
    isActive(item) {
      return Boolean(JSON.stringify(this.value) === JSON.stringify(item));
    },
  },
};
</script>

<style lang="scss">
.a-tabs {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  &__item {
    height: 100%;
    padding: 0 10px;
    position: relative;
    font-weight: 500;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      height: 4px;
      border: 4px;
      background-color: map-get($primary, 'lighten-1');
    }
    &:hover {
      background-color: map-get($grey, 'lighten-1');
    }
  }
  &__item--active {
    background-color: map-get($primary, 'base');
  }
}
</style>
