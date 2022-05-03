<template>
  <v-card flat class="grey lighten-5">
    <!-- Dialog -->
     <v-dialog
        v-model="updateQuerynameDialog"
        transition="dialog-top-transition"
        max-width="400"
      >
         <v-card>
            <v-card-text>
              <v-subheader class="pa-2">Update query name</v-subheader>
              <v-text-field
              v-model="selectedQueryName"
              label="Query name"
            ></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="updateQuerynameDialog = false"
              >Close</v-btn>
               <v-btn
                text
                @click="updateQueryName"
              >Update</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>

    <!-- Nav header -->
    <v-toolbar flat class="grey lighten-5">
      <v-toolbar-title>
        <v-row>
          <v-col sm="9" cols="12">
            <v-text-field
              v-model="search"
              placeholder="Filter queries"
              filled
              rounded
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col sm="3" cols="12">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  fab
                  dark
                  x-small
                  color="primary"
                  @click="addNewQuery"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </template>
              <span>New query</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-toolbar-title>
    </v-toolbar>

    <!-- Query nav -->
    <v-treeview
      activatable
      hoverable
      open-all
      dense
      :items="queries"
      :search="search"
      :filter="filter"
      :open.sync="open"
    >
      <template v-slot:prepend="{ item, open }">
        <div v-if="item.parent">
           <v-icon>
          {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
        </v-icon>
         {{ item.name }}
        </div>
        <div v-else>
           <v-icon>
          mdi-file-document-outline
        </v-icon>
        </div>
      </template>
      <template v-slot:label="{ item }">
        <div v-if="!item.parent" class="row" style="width: 210px" @click="openQuery(item)">
          <div class="col-12 text-truncate">
            {{ item.name }}
          </div>
        
        </div>
      </template>
      <template v-slot:append="{ item }">
        <v-menu
            v-if="!item.parent"
            rounded
            bottom
            left
            origin="right right"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="addSelectedQueryNameToTextField(item.name, item.id)">
                <v-list-item-title>update</v-list-item-title>
              </v-list-item>
              <v-list-item @click="removeQuery(item.id)">
                <v-list-item-title>delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </template>
    </v-treeview>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "QueryNav",
  data: () => ({
    id: 0,
    open: [1, 2],
    search: null,
    selectedQueryName: '',
    selectedQueryID: null,
    caseSensitive: false,
    updateQuerynameDialog: false,
    updateQueryDialogIsOpened: false,
  }),
  computed: {
    filter () {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].includes(search)
        : undefined
    },
    ...mapState([
      'queries',
    ]),
  },
  methods: {
    ...mapActions([
      'addNewQuery',
      'removeQuery',
      'openQuery'
    ]),
    changeQueryName(name) {
      alert(name)
      this.updateQueryDialogIsOpened = false
    }, 
    addSelectedQueryNameToTextField(queryName, queryID) {
        this.updateQuerynameDialog = true
        this.selectedQueryName = queryName
        this.selectedQueryID = queryID
    },
    updateQueryName() {
      this.$store.dispatch('updateQuery', {id: this.selectedQueryID, name: this.selectedQueryName})
      this.updateQuerynameDialog = false
    }
  }
}
</script>
