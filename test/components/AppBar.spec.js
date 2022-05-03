import { mount } from '@vue/test-utils'
import AppBar from '@/components/AppBar.vue'

describe('AppBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppBar)
    expect(wrapper.vm).toBeTruthy()
  })
})
