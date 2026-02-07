<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from '../components/UserProfile/UserProfile.vue';
import MeditationList from '../components/MeditationList/MeditationList.vue';
import TabsList from '@/components/Tabs/TabsList.vue';

const name = ref('Will')
</script>

<template>
  <main class="page-main">
    <aside class="user-interface">
      <user-profile :name class="user-interface__profile" />
      <tabs-list class="user-interface__tabs" />
    </aside>
    <section class="meditations">
      <meditation-list />
    </section>
  </main>
</template>


<style scoped lang="scss">
.page-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
}

.user-interface {
  display: flex;
  flex-direction: column;
  max-width: 370px;

  &__profile {
    margin-bottom: 40px;
  }
}
</style>