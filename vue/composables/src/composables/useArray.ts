import { computed, type Ref } from 'vue'

export function useArray(arr: Ref<any[]>) {
  const json = computed(() => JSON.stringify(arr.value, null, 2))

  return {
    json
  }
}
