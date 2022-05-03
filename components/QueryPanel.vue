<template>
    <multipane class="foo" layout="horizontal">
          <textarea v-model="query" id="editor"></textarea>
          <multipane-resizer></multipane-resizer>
          <Banner/>
          <Table v-if="showResult"/>
          <div v-else class="emptyData">
            <v-icon size="100" color="grey">mdi-table-large</v-icon>
            <p class="grey--text">Run query to show result</p>
          </div>
    </multipane>
</template>

<script>
import { mapState } from 'vuex'
import { Multipane, MultipaneResizer } from 'vue-multipane';
import Table from "../components/Table";

let CodeMirror;
// Initialie codemirror on client mode
if(process.client) {
  CodeMirror = require('codemirror')
  require('codemirror/lib/codemirror.css')
  require('codemirror/mode/sql/sql')
  require('codemirror/theme/neo.css')
  require('codemirror/addon/selection/active-line')
}

export default {
    name: 'QueryPanel',
    components: {
    Multipane,
    MultipaneResizer,
    Table
  },
   computed: {
    ...mapState([
      'selectedQuery',
      'showResult',
    ]),
    selectedQueryName: {
      get () {
        return this.$store.state.selectedQuery.name
      },
      set (value) {
        this.$store.commit('updateQuery', value)
      }
    },
  },
   mounted() {
    CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'neo',
      mode: 'sql',
      lineWrapping: true,
      styleActiveLine: { nonEmpty: true },
      styleActiveSelected: true,
    })
  },
  data: () => ({
    query: "select * from  customers",
  }),
}
</script>
<style scoped>
.multipane.foo.layout-h .multipane-resizer {
  margin: 0; top: 0; /* reset default styling */
  height: 5px;
  border-radius: 5px;
  background: #EEE;
}
.emptyData {
  text-align: center;
  margin-top: 50px;
}
</style>
