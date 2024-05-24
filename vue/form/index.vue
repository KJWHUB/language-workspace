<script setup lang="ts">
import { reactive } from "vue";
import { a1, a2, a3, a4, a5, a6, a7 } from "./components";

const formData = reactive({
  a1: {},
  a2: {},
  a3: {},
  a4: {},
  a5: {},
  a6: {},
  a7: {},
});
</script>

<template>
  <div>
    <h1>Form</h1>

    <div>
      <a1 :formData="formData.a1" />
      <a2 :formData="formData.a2" />
      <a3 :formData="formData.a3" />
      <a4 :formData="formData.a4" />
      <a5 :formData="formData.a5" />
      <a6 :formData="formData.a6" />
      <a7 :formData="formData.a7" />
    </div>
  </div>
</template>

<style scoped></style>
