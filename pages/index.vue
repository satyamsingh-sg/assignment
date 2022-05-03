<template>
  <div>
    <EmptyData v-if="selectedQuery.id === null"  />
    <v-row v-else justify="center" align="center">
      <v-col cols="12">
        <header-query-panel/>
      </v-col>
      <v-col cols="12" style="margin-top: -30px">
        <v-divider class="mb-3"/>
        <query-panel/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import HeaderQueryPanel from '~/components/HeaderQueryPanel.vue';
import QueryPanel from '~/components/QueryPanel.vue';


export default {
  name: 'Index',
  components: {
    HeaderQueryPanel,
    QueryPanel
  },
  computed: {
    ...mapState([
      'selectedQuery',
    ]),
  }
}
</script>