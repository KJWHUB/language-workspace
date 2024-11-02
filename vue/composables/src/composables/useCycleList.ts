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
        throw new Error(
          `{${value}} 는 useCycleList 목록에서 찾을 수 없으며 state.value = '' 로 설정할 수 없습니다.`
        )
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
