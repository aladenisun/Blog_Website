<template>
  <v-app :fullscreen="$vuetify.breakpoint.mobile">
    <v-card>
      <v-navigation-drawer v-model="drawer" absolute temporary app :color="color">
        <v-list>
          <v-list-item v-for="item in NavBarItems" :key="item.title" router :to="item.link">
            <v-list-item-content class="navigationBarColor">{{ item.title }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app>
        <v-toolbar flat>
          <v-app-bar-nav-icon @click.native="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="font">
            <router-link to="/" tag="span" style="cursor pointer">Unapologetic Sunrise</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-col>
              <v-btn
                class="colorFooter"
                text
                small
                v-for="item in toolbarItems"
                :key="item.title"
                router
                :to="item.link"
              >{{ item.title }}</v-btn>
            </v-col>
          </v-toolbar-items>
        </v-toolbar>
      </v-app-bar>
      <main>
        <router-view></router-view>
      </main>

      <v-footer class="hidden-xs-only" color="#e6ddd5" flat tile>
        <pre class="colorFooter" color="black">Get connected with me on social networks!</pre>
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in socials"
          :key="item.icon"
          :href="item.href"
          class="mx-4"
          color="black"
          dark
          icon
        >
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }}
          <pre class="small">UnapologeticSunrise</pre>
        </v-card-text>
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
    NavBarItems: [
      { title: 'Home', link: '/' },
      { title: 'About', link: '/about' },
      { title: 'Subscribe', link: '/application' },
      { title: 'Contact', link: 'contact' }
    ],
    toolbarItems: [
      { title: 'View Blogs', link: '/viewPosts' },
      { title: 'Sign in', link: '/signIn' }
    ],
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com/' },
      { icon: 'mdi-twitter', href: 'https://twitter.com/nisunalade' },
      { icon: 'mdi-linkedin', href: 'https://linkedin.com' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com/nisunalade/' }
    ]
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
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 15px;
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
