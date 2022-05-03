<template>
    <v-treeview
      v-model="tree"
      :open="initiallyOpen"
      :items="items"
      activatable
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>
</template>

<script>
export default {
  name: "SchemaNav",
  data: () => ({
    initiallyOpen: ['public'],
    files: {
      formular: 'mdi-function-variant',
      table: 'mdi-table',
    },
    tree: [],
    items: [
      {
        name: 'default',
        children: [
          {
            name: 'Tables 1',
            children: [
              {
              name: 'Customers',
              file: 'table',
            }
            ],
          },
          {
              name: 'Views 0',
              file: 'table',
            },
            {
              name: 'Functions 0',
              file: 'formular',
            },
        ],
      },
    ],
  }),
}
</script>
