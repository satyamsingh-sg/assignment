import { mount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('SchemaNav', () => {
    const state = {
        selectedQuery: {
            id: null,
            name: '',
            query: '',
            headers: []
        },
    }
  test('is a Vue instance', () => {
    const wrapper = mount(Table, {
        computed: {
            ...state,
            headers: []
        }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
