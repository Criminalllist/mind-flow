<script setup lang="ts">
import type { Tab } from '@/interfaces/tab.interface';
import { getIcon } from '@/utils/getIcon';
const { iconName, title } = defineProps<Tab>()
</script>

<template>
  <button type="button" class="tabs-button">
    <div class="tabs-button__image">
      <component :is="getIcon(iconName)" />
    </div>
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.tabs-button {
  background-color: unset;
  border: none;

  display: grid;
  place-items: center;
  gap: 5px;
  padding: 0;
  color: var(--color-white);
  font-size: 1.2rem;

  &__image {
    width: 65px;
    height: 65px;
    padding: 15px;
    border-radius: var(--border-radius-l);
    color: var(--color-green);
    background-color: var(--background-card);
    transition: background-color 0.3s ease;

    @media (hover: hover) {
      &:hover {
        background-color: var(--background-icon-hover);
      }
    }

    @media (hover: none) {
      &:active {
        background-color: var(--background-icon-hover);
      }
    }
  }
}
</style>