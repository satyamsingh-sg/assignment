import { mount } from '@vue/test-utils'
import Banner from '@/components/Banner.vue'

describe('Banner', () => {
  const state = {
    showResult: false,
    selectedQuery: {
      id: null,
      name: '',
      query: '',
      queryResult: []
    }
  }
  test('is a Vue instance', () => {
    const wrapper = mount(Banner, {
      computed: {
        ...state
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
