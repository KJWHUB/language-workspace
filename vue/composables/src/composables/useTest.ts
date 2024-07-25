import { ref } from 'vue'

export const useAddTestData = (fn: (count: any) => void) => {
  const count = ref(1)
  return {
    addTestData() {
      fn(count.value++)
    }
  }
}
