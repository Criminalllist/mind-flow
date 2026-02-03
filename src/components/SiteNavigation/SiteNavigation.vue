<script setup lang="ts">
import IconHome from '@/common/icons/IconHome.vue';
import IconStatistic from '@/common/icons/IconStatistic.vue';
import IconExit from '@/common/icons/IconExit.vue';

</script>

<template>
  <nav class="site-navigation">
    <ul class="site-navigation__list">
      <li class="site-navigation__item">
        <router-link active-class="active" :to="{ name: 'home' }" class="site-navigation__link">
          <icon-home />
          <p>Медитация</p>
        </router-link>
      </li>
      <li class="site-navigation__item">
        <router-link active-class="active" :to="{ name: 'statistics' }" class="site-navigation__link">
          <icon-statistic />
          <p>Статистика</p>
        </router-link>
      </li>
      <li class="site-navigation__item">
        <router-link active-class="active" to="home" class="site-navigation__link">
          <icon-exit />
          <p>Выход</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.site-navigation {
  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    padding: 20px 50px;

    &:not(:last-child) {
      border-right: 3px solid #3A5051;
    }
  }

  &__link {
    display: grid;
    place-items: center;
    gap: 5px;
    color: var(--color-white);
    text-decoration: none;
    opacity: 0.5;

    &.active {
      opacity: 1;
    }
  }
}
</style>