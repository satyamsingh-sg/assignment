import { mount } from '@vue/test-utils'
import EmptyData from '@/components/EmptyData.vue'

describe('EmptyData', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(EmptyData)
    expect(wrapper.vm).toBeTruthy()
  })
})
