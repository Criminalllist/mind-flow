<script setup lang="ts">
import BaseButton from '@/common/components/BaseButton.vue';
import IconPlay from '@/common/icons/IconPlay.vue';

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
  <li class="meditation-card">
    <h2 class="meditation-card__title">{{ meditation.title }}</h2>
    <p class="meditation-card__description">{{ meditation.description }}</p>
    <div class="meditation-card__footer">
      <base-button>
        Начать
        <template #icon>
          <icon-play />
        </template>
      </base-button>
      <span class="meditation-card__duration">{{ meditation.duration_min }}</span>
    </div>
  </li>
</template>

<style scoped lang="scss">
.meditation-card {
  display: flex;
  flex-direction: column;

  &__title,
  &__description {
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--color-main);
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  }

  &__duration {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-green);
    opacity: 0.75;
  }

}
</style>