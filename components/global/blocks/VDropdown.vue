<template>
  <div v-click-outside="outside" class="v-dropdown" :class="{ 'v-dropdown--opened': isShown }">
    <div class="v-dropdown__activator">
      <slot name="activator" :on="on" :show="show" :hide="hide" :is-shown="isShown"></slot>
    </div>
    <div v-show="isShown" class="v-dropdown__content" :style="getStyle" @click="click">
      <slot :show="show" :hide="hide" :is-shown="isShown"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    top: {
      type: String,
      default: 'calc(100% + 5px)',
    },
    left: {
      type: String,
      default: '0',
    },
    hideOnClick: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      on: {
        click: this.click,
      },
      isShown: false,
    }
  },
  computed: {
    getStyle() {
      return {
        top: this.top,
        left: this.left,
      }
    },
  },
  methods: {
    outside() {
      if (this.isShown) this.hide()
    },
    click() {
      if (!this.isShown) {
        this.show()
      } else if (this.hideOnClick) {
        this.hide()
      }
      this.$emit('click', this.isShown)
    },
    show() {
      this.isShown = true
      this.$emit('show')
    },
    hide() {
      this.isShown = false
      this.$emit('hide')
    },
  },
}
</script>

<style lang="scss">
.v-dropdown {
  position: relative;
  &__activator {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &__content {
    position: absolute;
    left: 0;
    top: calc(100% + 5px);
    box-shadow: 0 0.3rem 3rem 0 #36363633;
    border: none;
    border-radius: 0;
    width: 100%;
    z-index: 2;
    // overflow: hidden;
    // min-height: 4rem;
  }
  &--active {
    .v-dropdown__activator::before {
      transform: rotate(180deg);
    }
  }
}
</style>