<template>
  <div class="user-profile">
    <div class="user-profile__avatar">
      <img src="/user-avatar.png" width="128" height="128" alt="user avatar">
    </div>
    <div class="user-profile__greeting">
      <h2 class="user-profile__greeting-title">
        Добро пожаловать, {{ name }}!
      </h2>
      <p class="user-profile__greeting-subtitle">
        Как вы сегодня себя чувствуете?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserProfile } from '@/interfaces/user-profile.iterface';

const { name = 'Will' } = defineProps<UserProfile>()
</script>

<style scoped style="scss"></style>