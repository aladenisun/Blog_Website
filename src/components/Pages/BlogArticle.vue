<template>
  <v-container>
    <section class="sectionEdit" justify="center" align="center"></section>
    <div class="postTitle">POSTS</div>
    <v-row>
      <v-card class="mx-auto" max-width="900">
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex" :text="card.text">
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="brown" @click="overlay = !overlay">
                    Read
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-overlay :absolute="absolute" :value="overlay">
                <v-card
                  class="justify-center"
                  align="center"
                  max-width="400"
                  max-height="900"
                  elevation="12"
                  color="#dac4b5"
                >
                  <v-card-text v-text="card.text"></v-card-text>
                  <v-btn color="black" @click="overlay = false"> Exit</v-btn>
                </v-card>
              </v-overlay>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    absolute: true,
    overlay: false,
    cards: [
      {
        title: 'In-house Plant Care',
        src:
          'https://hgtvhome.sndimg.com/content/dam/images/hgtv/editorial/blogs/fullset/Danasia/RX-Debbie-Patterson-Dorling-Kindersley-English-Ivy.jpg.rend.hgtvcom.1280.853.suffix/1496166616339.jpeg',
        flex: 12,
        text:
          'text1-Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.'
      },
      {
        title: 'In the Shadows',
        src: 'https://c0.wallpaperflare.com/preview/199/394/541/plant-leaf-fern-animal.jpg',
        flex: 6,
        text:
          'text2-Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.'
      },
      {
        title: 'Minimalistic Lifestyle',
        src: 'https://i.pinimg.com/originals/52/10/88/5210881f37ca995ae6d28f7a0e6b302a.jpg',
        flex: 6,
        text:
          'text5-Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.'
      }
    ]
  })
}
</script>

<style>
.sectionEdit {
  background-image: url(https://c1.wallpaperflare.com/preview/740/70/428/white-aesthetic-table-vase.jpg);
  position: relative;
  width: 100%;
  height: 50vh;
  color: white;
  background-position: center center;
  background-size: cover;
}
.postTitle {
  font-size: 40px;
  font-family: 'Courier New', Courier, monospace;
  align-self: center;
  text-align: center;
  padding-top: 3rem !important;
}
</style>
