<template>
  <v-container fluid>
    <v-flex xs12 sm10 md12 class="text-xs-center">
      <div>THIS IS A POST!</div>
      <v-spacer></v-spacer>
      <v-row>
        <v-card>
          <v-img
            :src="post.src"
            class="white--text align-end text-xs-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          ></v-img>
          <v-card-title>
            <pre justify="center--text" align="center--text">{{ post.title }}</pre>
          </v-card-title>
          <v-card-text>
            <div class="info--text">{{ post.date }}</div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus saepe non,
              consectetur alias sed laudantium officiis eius adipisci porro? Libero illum totam
              optio dolore dicta voluptate dolor vitae possimus debitis.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    post() {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
