<script setup lang="ts">
import { useCycleList } from '@/composables/useCycleList'
import { ref } from 'vue'

const reactiveArr = ref([1, 2, 3])
const plainArr = [1, 2, 3]
const retrunArr = () => [1, 2, 3]

// const { state, prev, next } = useCycleList(reactiveArr)
// const { state, prev, next } = useCycleList(plainArr)
const { state, prev, next } = useCycleList(retrunArr)
</script>

<template>
  <div>
    <h1>TypeArgsView</h1>
    <p>state: {{ state }}</p>
    <button @click="prev">Prev</button>
    <button @click="next">Next</button>
  </div>
</template>

<style scoped></style>
