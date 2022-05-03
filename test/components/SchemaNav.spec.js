import { mount } from '@vue/test-utils'
import SchemaNav from '@/components/SchemaNav.vue'

describe('SchemaNav', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SchemaNav)
    expect(wrapper.vm).toBeTruthy()
  })
})
