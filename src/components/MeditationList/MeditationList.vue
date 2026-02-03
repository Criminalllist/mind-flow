<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeditationStore } from '@/stores/meditations.store';
import MeditationCard from '@/components/MeditationCard/MeditationCard.vue';

const store = useMeditationStore()

onMounted(() => {
  store.getMeditations()
})
</script>

<template>
  <ul class="meditation-list">
    <meditation-card v-for="meditation in store.meditations" :key="meditation.id" :meditation="meditation" />
  </ul>
</template>


<style scoped lang="scss">
.meditation-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  gap: 22px 24px;
  margin-top: 40px;
}

.meditation-card {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-l);

  &__title {
    color: var(--color-main);
    font-size: 2.5rem;
    font-weight: 500;
  }

  &__description {
    color: var(--color-main);
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }

  &__duration {
    color: var(--color-green);
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 0.75;
  }
}
</style>