import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from './index.vue'

describe('Counter', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it('컴포넌트를 렌더링합니다', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('초기 카운트가 0으로 표시됩니다', () => {
    expect(wrapper.find('.count-value').text()).toContain('0')
  })

  it('+ 버튼을 클릭하면 카운트가 증가합니다', async () => {
    await wrapper.find('button.increase').trigger('click')
    expect(wrapper.find('.count-value').text()).toContain('1')
  })

  it('- 버튼을 클릭하면 카운트가 감소합니다', async () => {
    await wrapper.find('button.decrease').trigger('click')
    expect(wrapper.find('.count-value').text()).toContain('-1')
  })

  it('max 속성을 준수합니다', async () => {
    wrapper = mount(Counter, {
      props: { max: 2 }
    })

    await wrapper.find('button.increase').trigger('click')
    await wrapper.find('button.increase').trigger('click')
    await wrapper.find('button.increase').trigger('click')

    expect(wrapper.find('.count-value').text()).toContain('2')
    expect(wrapper.text()).toContain('최대값은 2입니다.')
  })

  it('min 속성을 준수합니다', async () => {
    wrapper = mount(Counter, {
      props: { min: -2 }
    })

    await wrapper.find('button.decrease').trigger('click')
    await wrapper.find('button.decrease').trigger('click')
    await wrapper.find('button.decrease').trigger('click')

    expect(wrapper.find('.count-value').text()).toContain('-2')
    expect(wrapper.text()).toContain('최소값은 -2입니다.')
  })

  it('카운트가 제한 내에서 변경될 때 메시지를 지웁니다', async () => {
    wrapper = mount(Counter, {
      props: { max: 1, min: -1 }
    })

    // Max limit
    await wrapper.find('button.increase').trigger('click')
    await wrapper.find('button.increase').trigger('click')
    expect(wrapper.text()).toContain('최대값은 1입니다.')

    // Clear message
    await wrapper.find('button.decrease').trigger('click')
    expect(wrapper.text()).not.toContain('최대값은 1입니다.')

    // Min limit
    await wrapper.find('button.decrease').trigger('click')
    await wrapper.find('button.decrease').trigger('click')
    expect(wrapper.text()).toContain('최소값은 -1입니다.')

    // Clear message
    await wrapper.find('button.increase').trigger('click')
    expect(wrapper.text()).not.toContain('최소값은 -1입니다.')
  })
})
