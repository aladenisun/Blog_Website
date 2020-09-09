<template>
  <v-app :fullscreen="$vuetify.breakpoint.mobile">
    <v-card>
      <v-navigation-drawer v-model="drawer" absolute temporary app :color="color">
        <v-list nav dense>
          <v-list-item-group active-class="primary--text">
            <v-list-item v-on:click="routeTo('/home')">
              <v-list-item-title class="navigationBarColor1">Home</v-list-item-title>
            </v-list-item>
            <v-list-item v-on:click="routeTo('/about')">
              <v-list-item-title class="navigationBarColor">About</v-list-item-title>
            </v-list-item>
            <v-list-item v-on:click="routeTo('/application')">
              <v-list-item-title class="navigationBarColor">Subscribe</v-list-item-title>
            </v-list-item>
            <v-list-item v-on:click="routeTo('/contact')">
              <v-list-item-title class="navigationBarColor">Contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app>
        <v-toolbar>
          <v-app-bar-nav-icon @click.native="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="font">Unapologetic Sunrise</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn class="bold">View Blogs</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-app-bar>
      <v-main></v-main>

      <v-footer class="hidden-xs-only" color="#e6ddd5" flat tile>
        <pre class="colorFooter" color="black">Get connected with me on social networks!</pre>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" color="black" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }}
          <pre class="colorFooter">UnapologeticSunrise</pre>
        </v-card-text>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
import socials from './utils/constants/socials'
//import { mdiAccount } from '@mdi/js';
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    color: 'secondary',
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  }),

  methods: {
    routeTo(newPath) {
      this.$router.push({ path: newPath })
    }
  }
}
</script>

<style>
.navigationBarColor {
  color: #e0d2d2 !important;
}
.navigationBarColor1 {
  color: rgb(224, 210, 210) !important;
}
.colorFooter {
  color: black;
  font-size: 15px;
}
.font {
  font-family: 'Courier New', Courier, monospace;
  font-style: oblique;
  font-weight: bold;
}
</style>
