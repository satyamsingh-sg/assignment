import { mount } from '@vue/test-utils'
import QueryNav from '@/components/QueryNav.vue'

describe('QueryNav', () => {
    const state = {
        queries: [{
            id: 1,
            name: 'My queries :',
            children: [],
        }]
    }
    test('is a vue instance', () => {
        const wrapper = mount(QueryNav, {
            computed: {
                ...state
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })
})