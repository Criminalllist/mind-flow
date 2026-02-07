<script setup lang="ts">
import { ref } from 'vue'
import type { Tab } from '@/interfaces/tab.interface';
import TabButton from './Components/TabButton.vue';

const buttons = ref<Tab[]>([
  {
    title: 'Спокойно',
    iconName: 'IconCalm'
  },
  {
    title: 'Расслабленно',
    iconName: 'IconRelax'
  },
  {
    title: 'Фокусировано',
    iconName: 'IconFocus'
  },
  {
    title: 'Тревожно',
    iconName: 'IconAlarm'
  },
])
</script>

<template>
  <ul class="tabs-list">
    <li v-for="item in buttons" :key="item.title" class="tabs-list__item">
      <tab-button v-bind="item" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.tabs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}
</style>