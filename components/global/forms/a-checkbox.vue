<template>
  <label class="a-checkbox">
    <input class="a-checkbox__input" type="checkbox" v-bind="$attrs" />
    <span class="a-checkbox__mark"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'input',
  },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
$borderRadius: 4px;
$size: 18px;
.a-checkbox {
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &__mark {
    position: relative;
    display: block;
    height: $size;
    width: $size;
    border: 1px solid map-get($grey, 'base');
    border-radius: $borderRadius;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 45%;
      left: 50%;
      height: calc(70%);
      width: calc(40%);
      transform: translate(-50%, -50%) rotate(43deg);
      border-right: 2px solid $white;
      border-bottom: 2px solid $white;
    }
  }
  &__input:checked ~ &__mark {
    background-color: map-get($primary, 'base');
  }
}
</style>
