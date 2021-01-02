<template>
  <v-container>
    <v-flex xs12 sm10 md12 class="text-xs-center">
      <div class="postTitle">BLOG POSTS</div>
      <v-row>
        <v-container fluid>
          <!-- <v-row dense> -->
          <v-row v-for="post in posts" :key="post.id" :cols="post.flex" :text="post.text">
            <v-card class="card-xs-center" style="cursor:pointer">
              <v-img
                :src="post.src"
                class="white--text align-end text-xs-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="post.title"></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="brown" @click="overlay = !overlay">Summary</v-btn>

                <v-btn to="//1" color="brown" @click="onLoadPost(post.id)">Read</v-btn>

                <v-btn icon @click="colorChange()">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-overlay :absolute="absolute" :value="overlay">
              <v-card
                class="justify-center mx-auto"
                align="center"
                max-width="400"
                max-height="900"
                elevation="12"
                color="#dac4b5"
              >
                <v-card-text v-text="post.text"></v-card-text>
                <v-btn color="black" @click="overlay = false">Exit</v-btn>
              </v-card>
            </v-overlay>
          </v-row>
          <!-- </v-row> -->
        </v-container>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.loadedPosts
    }
  },
  data() {
    return {
      absolute: true,
      overlay: false
    }
  }
}
</script>

<style>
.postTitle {
  font-size: 40px;
  font-family: 'Courier New', Courier, monospace;
  align-self: center;
  text-align: center;
  padding-top: 3rem !important;
}
</style>
