<script setup lang="ts">
import Counter from '@/components/counter/index.vue'
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter :max="3" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
