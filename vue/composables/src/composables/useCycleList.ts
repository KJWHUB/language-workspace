import { computed, ref, toRef, type MaybeRefOrGetter } from 'vue'

export const useCycleList = (list: MaybeRefOrGetter<any[]>) => {
  const activeIndex = ref(0)
  const _list = toRef(list)
  const state = computed({
    get() {
      return _list.value[activeIndex.value]
    },
    set(value) {
      const fountIndex = _list.value.indexOf(value)
      if (fountIndex === -1) {
        throw new Error(`Value: {${value}} not found in list`)
      }
      activeIndex.value = fountIndex
    }
  })

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
