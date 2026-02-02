<template>
  <main class="page-main">
    <div class="container">
      <aside class="user-interface">
        <user-profile :name />
      </aside>
      <section class="meditations">
        <meditation-list />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from './components/UserProfile/UserProfile.vue';
import MeditationList from './components/MeditationList/MeditationList.vue';

const name = ref('Will')
</script>

<style scoped lang="scss"></style>
