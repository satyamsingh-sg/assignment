<template>
   <v-row>
      <!-- // Readonly query name -->
    <v-col cols="12" sm="10" md="10">
        <v-text-field
        v-model="selectedQueryName"
        prepend-inner-icon="mdi-file-document-outline"
        placeholder="Query name"
        dense
        filled
        rounded
        readonly
        flat
        color="grey"
        class="ml-5 font-weight-medium title"
        ></v-text-field>
    </v-col>
    
    <!-- Run command button -->
    <v-col cols="12" sm="2" md="2">
        <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            v-bind="attrs"
            v-on="on"
            color="success"
            block
            v-hotkey="keymap"
            @click="toggleShowResult"
            >
            <v-icon>mdi-play</v-icon>
            Run
            </v-btn>
        </template>
        <span>Run query (ctrl+enter)</span>
        </v-tooltip>
    </v-col>
    </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "HeaderQueryPanel",
     computed: {
    ...mapState([
      'selectedQuery',
      'showResult',
    ]),
    /**
     *  Show query result when user press ctrl+enter key
     */
    keymap() {
      return {
        'ctrl+enter': this.toggleShowResult
      }
    },
    selectedQueryName: {
      get () {
        return this.$store.state.selectedQuery.name // query name
      },
      set (value) {
        this.$store.commit('updateQuery', value) // Update query name
      }
    },
  },
   methods: {
    ...mapActions([
      'toggleShowResult'
    ]),
  }
}
</script>