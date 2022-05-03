<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        Query result
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="selectedQuery.headers"
        :items="selectedQuery.queryResult"
        :items-per-page="5"
        :search="search"
        dense
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Table",
  computed: {
    ...mapState([
      'selectedQuery'
    ])
  },
  data: () => ({
    search: ''
  }),
}
</script>
