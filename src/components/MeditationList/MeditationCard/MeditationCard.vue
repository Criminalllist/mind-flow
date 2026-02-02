<script setup lang="ts">
import BaseButton from '@/common/components/BaseButton.vue';
import PlayIcon from '@/common/icons/PlayIcon.vue';

interface MeditationItem {
  meditation: {
    title: string,
    description: string,
    duration_min: number
  }
}


defineProps<MeditationItem>()
</script>

<template>
  <li class="medidation-list__item meditation-card">
    <h2 class="meditation-card__title">{{ meditation.title }}</h2>
    <p class="meditation-card__description">{{ meditation.description }}</p>
    <div class="meditation-card__footer">
      <base-button>
        Начать
        <template #icon>
          <PlayIcon />
        </template>
      </base-button>
      <span class="meditation-card__duration">{{ meditation.duration_min }}</span>
    </div>
  </li>
</template>

<style scoped></style>