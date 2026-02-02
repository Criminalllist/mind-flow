<script setup lang="ts">
import BaseButton from '@/common/components/BaseButton.vue';
import PlayIcon from '@/common/icons/PlayIcon.vue';
</script>

<template>
  <ul class="meditation-list">
    <li class="medidation-list__item meditation-card">
      <h2 class="meditation-card__title">title</h2>
      <p class="meditation-card__description">description</p>
      <div class="meditation-card__footer">
        <base-button>
          Начать
          <template #icon>
            <PlayIcon />
          </template>
        </base-button>
        <span class="meditation-card__duration">duration</span>
      </div>
    </li>
  </ul>
</template>


<style scoped lang="scss">
.meditation-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  gap: 22px 24px
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