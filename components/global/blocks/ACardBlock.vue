<template>
  <div class="a-card-block">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.a-card-block {
  position: relative;
  padding: 20px 15px;
  border: 1px solid map-get($grey, 'lighten-1');
  border-radius: 16px;
}
</style>
