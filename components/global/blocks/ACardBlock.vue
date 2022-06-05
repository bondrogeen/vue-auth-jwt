<template>
  <div class="a-card-block">
    <div v-if="$slots.header">
      <div class="a-card-block__header">
        <slot name="header"> </slot>
      </div>
      <v-divider></v-divider>
    </div>
    <div class="a-card-block__body" :class="{ 'pb-0': $slots.footer }">
      <slot></slot>
    </div>
    <div v-if="$slots.footer">
      <v-divider></v-divider>
      <div class="a-card-block__footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.a-card-block {
  position: relative;
  border: 1px solid map-get($grey, 'lighten-1');
  border-radius: 16px;
  overflow: hidden;
  background-color: $white;
  padding: 0 20px;
  &__header,
  &__footer {
    padding: 15px 0;
  }
  &__body {
    padding: 20px 0;
  }
}
</style>
