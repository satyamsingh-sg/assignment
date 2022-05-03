import { mount } from '@vue/test-utils'
import HeaderQueryPanel from '@/components/HeaderQueryPanel.vue'

describe('HeaderQueryPanel', () => {
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
    const wrapper = mount(HeaderQueryPanel, {
      computed: {
        ...state,
        selectedQueryName: ''
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
