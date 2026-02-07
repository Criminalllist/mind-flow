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

<style scoped lang="scss">
.user-profile {
  &__avatar {
    width: 128px;
    height: 128px;
    margin-bottom: 30px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__greeting {
    display: grid;
    gap: 5px;

    &-title {
      font-size: 3rem;
      color: var(--color-white);
      font-weight: 500;
    }

    &-subtitle {
      font-size: 2.2rem;
      color: var(--color-white);
      opacity: 0.7;
    }
  }
}
</style>