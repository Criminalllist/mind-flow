<script setup lang="ts">

</script>

<template>
  <button type="button" class="button">
    <slot />
    <slot name="icon" />
  </button>
</template>

<style scoped style="scss">
.button {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 40px;
  padding: 10px;
  background-color: var(--background-button);
  border: none;
  border-radius: var(--border-radius-m);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  color: var(--color-white);
  transition: background-color .3s ease;

  @media (hover: hover) {
    &:hover {
      background-color: var(--background-button-hover);
    }
  }

  @media (hover: none) {
    &:active {
      background-color: var(--background-button-hover);
    }
  }
}
</style>