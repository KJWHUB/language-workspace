<script setup lang="ts">
import { useCycleList } from '@/composables/useCycleList'
import { ref } from 'vue'

const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'PHP',
  'Ruby',
  'Go',
  'Swift',
  'Kotlin'
]

const reactiveArr = ref([...languages])
// const plainArr = [...languages]
// const retrunArr = () => [...languages]

const { state, prev, next, go } = useCycleList(reactiveArr, {
  fallbackIndex: 0,
  fallbackValue: languages[0]
})

// const { state, prev, next } = useCycleList(plainArr)
// const { state, prev, next } = useCycleList(retrunArr)

const goTo = ref(0)
</script>

<template>
  <div>
    <h1>TypeArgsView</h1>
    <p>state: {{ state }}</p>
    <button @click="prev">Prev</button>
    <button @click="next">Next</button>
    <div>
      <input type="number" v-model="goTo" />
      <button @click="go(goTo)">Go to</button>
    </div>
  </div>
</template>

<style scoped></style>
