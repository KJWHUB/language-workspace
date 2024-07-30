<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  max?: number
  min?: number
}

const props = defineProps<Props>()

const count = ref(0)
const message = ref('')

// 증가 함수
const increase = () => {
  if (props.max && count.value >= props.max) {
    message.value = `최대값은 ${props.max}입니다.`
    return
  } else {
    clearMessage()
  }

  count.value++
}

// 감소 함수
const decrease = () => {
  if (props.min && count.value <= props.min) {
    message.value = `최소값은 ${props.min}입니다.`
    return
  } else {
    clearMessage()
  }

  count.value--
}

// clear message
function clearMessage() {
  message.value = ''
}
</script>

<template>
  <div class="counter">
    <button class="decrease" @click="decrease">-</button>
    <span class="count-value">{{ count }}</span>
    <button class="increase" @click="increase">+</button>

    <div v-if="message" class="message-wrap">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.counter {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
}

.counter button {
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #333;
}

.counter .message-wrap {
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;

  color: red;
}
</style>
