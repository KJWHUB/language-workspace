<script setup lang="ts">
import { useArray } from '@/composables/useArray'
import { ref } from 'vue'

const arr = ref([1, 2, 3])
const barr = [1, 2, 3]
const { json } = useArray(arr)
const { json: bjson } = useArray(barr)

const push = () => {
  // 정수 1 ~ 100
  const random = Math.floor(Math.random() * 100) + 1
  arr.value.push(random)
}
</script>

<template>
  <div>
    <h1>TypeArgsView</h1>
    <button @click="push">push</button>
    <p>{{ json }}</p>
  </div>
</template>

<style scoped></style>
