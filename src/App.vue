<template>
  <v-app :fullscreen="$vuetify.breakpoint.mobile">
    <v-card>
      <v-navigation-drawer v-model="drawer" app :color="color">
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
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </v-app-bar>

      <!-- Sizes your content based   upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter: pretty much your screen-->
        <v-container fluid>
          <!-- If using vue-router -->
          <v-alert v-if="!!$store.state.alertMsg" v-bind:type="$store.state.alertType">{{
            $store.state.alertMsg
          }}</v-alert>
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer dark padless>
        <v-card class="flex" color="#e6ddd5" flat tile>
          <v-card-title class="colorFooter">
            <pre class="colorFooter" color="black">Get connected with me on social networks!</pre>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" color="black" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }}
            <pre class="colorFooter">UnapologeticSunrise</pre>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
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
</style>
