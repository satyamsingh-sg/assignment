<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    dense
    app
  >
    <v-toolbar-title class="mr-5">
      {{ title }}
    </v-toolbar-title>
    <span class="grey--text">SQL Editor challenge</span>
    <v-spacer/>
    <v-btn
      icon
      x-large
      :link="true"
      href="https://github.com/Musbell/SQL-Editor/tree/release/0.1.0"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data () {
    return {
      clipped: true,
      title: 'Atlan',
      mini: false,
    }
  },
}
</script>
