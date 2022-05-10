<template>
  <div class="app-header-icon" :class="getClass" @click="$emit('click', $event)">
    <div v-if="badge" class="app-header-icon__badge">{{ badge }}</div>
    <div class="app-header-icon__slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    getClass() {
      return [`app-header-icon--${this.size}`];
    },
  },
};
</script>

<style lang="scss">
.app-header-icon {
  position: relative;
  height: 48px;
  width: 48px;
  padding: 1px;
  cursor: pointer;
  &__slot {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    overflow: hidden;
    background-color: map-get($primary, 'lighten-1');
  }
  &__badge {
    position: absolute;
    top: -4px;
    right: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    color: $white;
    height: 20px;
    width: 20px;
    border-radius: 8px;
    background-color: map-get($primary, 'base');
  }
  &--active {
    border: 2px solid #4e60ff;
  }
  &--small {
    height: 38px;
    width: 38px;
  }
}
</style>
