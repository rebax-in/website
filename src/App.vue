<template lang="pug">
div#app
  HeaderNav
  main(:class="{ 'with-fixed-header': $route.name !== 'Home' }")
    RouterView
  FooterSection
</template>

<script setup lang="ts">
import HeaderNav from './components/HeaderNav.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style lang="less">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    
    // Add top padding for non-homepage routes to account for fixed header
    &.with-fixed-header {
      padding-top: 80px; // Approximate header height
    }
  }
}
</style>