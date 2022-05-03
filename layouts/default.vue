<template>
  <v-app dark>
    <AppBar/>
    <NavigationDrawer/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar";
import NavigationDrawer from "../components/NavigationDrawer";
export default {
 name: 'default',
  components: {NavigationDrawer, AppBar},
}
</script>
<style>
body {
  font-size: 0.9em;
}
</style>
