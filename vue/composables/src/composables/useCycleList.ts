import { computed, ref, toRef, type MaybeRefOrGetter } from 'vue'

export const useCycleList = (list: MaybeRefOrGetter<any[]>) => {
  const activeIndex = ref(0)
  const _list = toRef(list)
  const state = computed(() => _list.value[activeIndex.value])

  function next() {
    if (activeIndex.value === _list.value.length - 1) {
      activeIndex.value = 0
    } else {
      activeIndex.value++
    }
  }

  function prev() {
    if (activeIndex.value === 0) {
      activeIndex.value = _list.value.length - 1
    } else {
      activeIndex.value--
    }
  }

  function go(index: number) {
    if (index >= _list.value.length) {
      throw new Error('Index out of bounds')
    }
    activeIndex.value = index
  }

  return { state, next, prev, go }
}
