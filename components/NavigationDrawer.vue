<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
    width="30%"
    class="grey lighten-5"
  >
    <v-row
      class="fill-height"
      no-gutters
    >

    <!-- Query nav -->
      <v-navigation-drawer
        mini-variant
        mini-variant-width="56"
        permanent
        class="grey lighten-3"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="require('~/assets/images/avatar.jpeg')"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider></v-divider>
        <v-list
          dense
          nav
        >
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              @click="currentNav = item.component"
            >
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-action
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <span>{{ item.title }}</span>
              </v-tooltip>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-list class="grow">
        <!-- Dynamic nav list -->
        <component v-bind:is="currentNavComponent"></component>
      </v-list>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data () {
    return {
      selectedItem: 0,
      currentNav: 'QueryNav',
      clipped: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-file-document-outline',
          title: 'Queries',
          component: 'QueryNav'
        },
        {
          icon: 'mdi-database',
          title: 'Schema',
          component: 'SchemaNav'
        }
      ],
    }
  },
  computed: {
    /**
     * Track active nav
     */
    currentNavComponent() {
      return this.currentNav
    },
  }
}
</script>
