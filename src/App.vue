<template>
  <div class="container">
    <the-header />

    <router-view />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader/TheHeader.vue';
</script>

<style scoped lang="scss"></style>
