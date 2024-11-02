import { computed, ref, toRef, type MaybeRefOrGetter, type Ref } from 'vue'

export interface useCycleListConfig {
  fallbackIndex?: number
  fallbackValue?: any
}

const useCycleListConfigDefaults: useCycleListConfig = {
  fallbackIndex: undefined,
  fallbackValue: undefined
}

export const useCycleList = <T>(list: MaybeRefOrGetter<T[]>, config?: useCycleListConfig) => {
  const _list = toRef(list) as Ref<T[]>
  const _config = {
    ...useCycleListConfigDefaults,
    ...config
  }
  const activeIndex = ref(0)
  const state = computed({
    get() {
      return _list.value[activeIndex.value]
    },
    set(value) {
      const fountIndex = _list.value.indexOf(value)
      if (fountIndex >= 0) {
        activeIndex.value = fountIndex
      } else {
        const foundFallbackValueIndex = _list.value.indexOf(_config.fallbackValue)
        if (foundFallbackValueIndex === -1) {
          throw new Error(
            `{${value}} 는 useCycleList 목록에서 찾을 수 없으며 state.value = '' 로 설정할 수 없습니다.`
          )
        } else {
          activeIndex.value = foundFallbackValueIndex
        }
      }
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
      if (_config.fallbackIndex !== undefined) {
        activeIndex.value = _config.fallbackIndex
        return
      }
      throw new Error('Index out of bounds')
    }
    activeIndex.value = index
  }

  return { state, next, prev, go }
}
