import { mutations } from "~/store";

const { 
    addNewQuery, 
    removeQuery, 
    updateQuery ,
    openQuery,
    toggleShowResult } = mutations;

describe('mutations', () => {
    it('ADD NEW QUERY', () => {
        // mock state
        const state = {
            queries: [{
                id: 1,
                name: 'My queries :',
                children: [],
            }]
        }
      // Apply mutation
      addNewQuery(state)

      // Assert result
      expect(state.queries[0].children).toHaveLength(1)
    })

    it('REMOVE QUERY', () => {
        // mock state
        const state = {
            queries: [{
                id: 1,
                name: 'My queries :',
                children: [{
                    id: 2,
                    name: 'All customers' ,
                }],
            }]
        }
        // Apply mutation
        removeQuery(state, 2)

        // Assert result
        expect(state.queries[0].children).toHaveLength(0)
    })

    it('UPDATE QUERY', () => {
        // mock state
        const state = {
            queries: [{
                id: 1,
                name: 'My queries :',
                children: [{
                    id: 2,
                    name: 'All customers' ,
                }],
            }]
        }

        // Apply mutation
        updateQuery(state, { id: 2, name: 'Customers record'})

        // Assert result
        expect(state.queries[0].children[0].name).toBe('Customers record')
    })

    it('OPEN QUERY', () => {
         // mock state
         const state = {
            queries: [{
                id: 1,
                name: 'My queries :',
                children: [{
                    id: 2,
                    name: 'All customers' ,
                }],
                showResult: false,
                selectedQuery: {
                    id: null,
                    name: '',
                  }
            }]
        }

        // Apply mutation
        openQuery(state, { id: 2, name: 'All customers' } )

         // Assert result
        expect(state.selectedQuery).toStrictEqual({ id: 2, name: 'All customers' })
        expect(state.showResult).toEqual(false)
    })

    it('TOGGLE SHOW RESULT', () => {
        // mock state
        const state = {
            queries: [{
                showResult: false,
            }]
        }

         // Apply mutation
         toggleShowResult(state)

         // Assert result
         expect(state.showResult).toEqual(true)
    })
})