<script setup>
import { onMounted, ref } from "vue";

const loop = Array(4)
  .fill(0)
  .map((_, i) => i + 1);

const itemRef = ref();

const itemH = ref(0);

onMounted(() => {
  console.log("item ref", itemRef.value);

  const w1 = itemRef.value[0].offsetWidth;

  const h1 = Math.floor(ratio(19, 54, w1));

  console.log("아이템 높이", h1);

  itemH.value = h1;
});

function ratio(a, b, n) {
  return (n * b) / a;
}
</script>

<template>
  <div class="wrap">
    <div ref="itemRef" class="wrap-item" v-for="item in loop" :key="item" :style="{ height: itemH + 'px' }">
      <p class="wrap-p">{{ item }}</p>
    </div>
  </div>
</template>

<style>
.wrap {
  display: flex;
  width: 1500px;

  background-color: gray;
}

.wrap-item {
  width: 25%;

  padding: 10px;

  border: 1px solid black;
}

.wrap-p {
  background-color: white;
}
</style>
