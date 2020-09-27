<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <pre justify="center--text" align="center--text">{{ post.title }}</pre>
          </v-card-title>
          <v-img class="imageEdit" justify="center" align="center" :src="post.src"></v-img>

          <v-card-text>
            <div class="info--text">10th Sept 2020</div>
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
      </v-flex>
    </v-layout>
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
<style>
.imageEdit {
  /* background-image: url('https://hgtvhome.sndimg.com/content/dam/images/hgtv/editorial/blogs/fullset/Danasia/RX-Debbie-Patterson-Dorling-Kindersley-English-Ivy.jpg.rend.hgtvcom.1280.853.suffix/1496166616339.jpeg'); */
  background-position: center;
  width: 100%;
  height: 30vh;
  color: white;
  background-size: cover;
}
</style>
