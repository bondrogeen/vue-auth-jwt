<template>
  <client-only>
  <header class="header">
    <v-container>
      <div class="header__logo">Vue auth JWT</div>
      <div class="header__menu">
        <v-list v-slot="{ item }" :list="[1, 2, 3]">
          {{ item }}fdf
        </v-list>
      </div>
      <div class="header__btn"></div>
    </v-container>
  </header>
  </client-only>
</template>


<style lang="scss">
.app-header {
  position: relative;
  min-height: 80px;
}
</style>