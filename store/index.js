import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { _customers } from '../api/customers'

// States
export const state = () => ({
  queries: [
    {
      id: 1,
      name: "My queries :",
      parent: true,
      children: [
        {
          id: 2,
          name: 'All customers' ,
          showResult: false,
          headers: [
            {
              text: 'customer ID',
              align: 'start',
              sortable: false,
              value: 'customerID',
            },
            { text: 'Company name', value: 'companyName' },
            { text: 'Contact name', value: 'contactName' },
            { text: 'Contact title', value: 'contactTitle' },
            { text: 'Address', value: 'address' },
            { text: 'Region', value: 'region' },
            { text: 'Postal code', value: 'postalCode' },
            { text: 'Country', value: 'country' },
            { text: 'Phone', value: 'phone' },
            { text: 'Fax', value: 'fax' },
          ],
          queryResult: [..._customers] // Imported data (Customer)
        },
      ],
    },
  ],
  showResult: false,
  selectedQuery: {
    id: null,
    name: '',
    query: '',
    queryResult: []
  }
})

// Mutations
export const mutations = {
  /**
   * Add new query to nav after clicking on ADD QUERY button
   * @param state
   * @returns {number}
   */
  addNewQuery: (state) => state.queries[0].children.push({
    id: uuidv4(), // generate random unique query id
    name: `Untitled query, ${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
    query: '',
    queryResult: []
  }),

  /**
   * Remove query fromq query nav
   * @param state
   * @param queryID
   * @returns {{readonly id?: *}[]}
   */
  removeQuery: (state, queryID) => (
    state.queries[0].children = [...state.queries[0].children.filter(({id}) => id !== queryID)]
  ),

/**
 * Update selected query name from the query nav
 * @param state
 * @param queryID
 */
  updateQuery: (state, queryObject) => {
    state.queries[0].children = [...state.queries[0].children.map(query => query.id === queryObject.id ? {
      ...query, 
      id: queryObject.id, 
      name: queryObject.name
    } : query )]
  },

  /**
   * open query on query panel
   * and hide opened query result on result panel
   * @param state
   * @param query
   */
  openQuery: (state, query) => {
    state.selectedQuery = {...query}
    state.showResult = false
  },

  /**
   * Show query result on the result panel
   * @param state
   * @returns {boolean}
   */
  toggleShowResult: ( state ) => (state.showResult = true)
}

// Actions
export const actions = {
  addNewQuery: ({ commit }) => commit('addNewQuery'), // Add query to the nav
  removeQuery: ({ commit }, payload) => commit('removeQuery', payload), // remove query from nav
  openQuery: ({ commit }, payload) => commit('openQuery', payload), // open selected query
  toggleShowResult: ({ commit }) => setTimeout(() => commit('toggleShowResult'), 500), // show query result
  updateQuery: ({ commit }, payload) => commit('updateQuery', payload)
}
