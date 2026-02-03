<script setup lang="ts">
import SiteNavigation from '@/components/SiteNavigation/SiteNavigation.vue';
</script>

<template>
  <header class="site-header">
    <router-link class="site-header__logo" :to="{ name: 'home' }">
      <img src="/logo.svg">
    </router-link>

    <site-navigation />
  </header>
</template>

<style scoped lang="scss">
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  &__logo {
    filter: drop-shadow(0 0px 20px #FFFFFF6D);
  }
}
</style>