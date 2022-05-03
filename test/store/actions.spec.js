import { actions } from "~/store"

const {
    addNewQuery, 
    removeQuery, 
    updateQuery ,
    openQuery,
    toggleShowResult } = actions;

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
    let count = 0

    // mock commit 
    const commit = (type, payload) => {
        const mutation = expectedMutations[count]

        try {
            expect(type).toEqual(mutation.type)
            expect(payload).toStrictEqual(mutation.payload)
        } catch (error) {
            done(error)
        }
    
        count++
        if (count >= expectedMutations.length) {
            done()
        }
    }

    // call the action with mocked store and arguments
    action({ commit, state }, payload)

    // check if no mutations should have been dispatched
    if (expectedMutations.length === 0) {
        expect(count).toEqual(0)
        done()
    }
}

describe('actions', () => {
    it('ADD NEW QUERY', done => {
         // mock state
         const state = {
            queries: [{
                id: 1,
                name: 'My queries :',
                children: [],
            }]
        }
        testAction(addNewQuery, null, state, [
            { type: 'addNewQuery' },
        ], done)
    })

    it('ROMOVE QUERY', done => {
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
        testAction(removeQuery, 2, state, [
            { type: 'removeQuery' , payload: 2},
        ], done)
    })

    it('OPEN QUERY', done => {
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
        testAction(openQuery, { id: 2, name: 'All customers' }, state, [
            { type: 'openQuery', payload: { id: 2, name: 'All customers' }},
        ], done)
    })

    it('TOGGLE SHOW RESULT', done => {
         // mock state
         const state = {
            queries: [{
                showResult: false,
            }]
        }
        testAction(toggleShowResult, null, state, [
            { type: 'toggleShowResult' },
        ], done)
    })

    it('UPDATE QUERY', done => {
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
        testAction(updateQuery, { id: 2, name: 'Customers record'}, state, [
            { type: 'updateQuery', payload: { id: 2, name: 'Customers record'} },
        ], done)
    })
})