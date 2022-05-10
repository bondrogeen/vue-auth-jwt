<template>
  <footer class="app-footer">
    <v-container>
      <v-row>
        <v-col cols="12"> © {{ new Date().getFullYear() }} «Vue auth JWT» </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style lang="scss">
.app-footer {
  position: relative;
}
</style>
