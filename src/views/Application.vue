<template>
  <v-container class="fill-height">
    <h1 class="textHome">UNAPOLOGETIC SUNRISE</h1>
    <v-row class="justify-center" justify="center">
      <v-card class="cardEdit" height="700" width="500" color="#e6ddd5">
        <div class="application">
          <v-row class="justify-center" justify="center">
            <v-img
              max-width="400"
              src="https://c0.wallpaperflare.com/preview/586/792/1009/home-house-plants-leaves.jpg"
              aspect-ratio="1.1"
              contain
            ></v-img>
          </v-row>
          <h1 class="fontFamilyType" align="center" justify="center">NEWSLETTER</h1>
          <p class="subtitleEdit" align="center" justify="center">
            Subscribe to recieve updates on new posts!
          </p>
          <app-form />
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AppForm from '@/components/Pages/AppForm'
export default {
  name: 'Application',
  components: {
    AppForm
  }
}
</script>

<style>
.fontFamilyType {
  color: #353131 !important;
}
.cardEdit {
  color: #e6ddd5 !important;
}
.subtitleEdit {
  color: #353131 !important;
}
.InfoSocials1 {
  color: #000000 !important;
  padding-top: 1rem;
  padding-left: 5rem !important;
  font-size: 15px;
  padding-bottom: 2rem;
}
.titleInfo1 {
  color: #000000 !important;
  text-decoration-line: overline;
  padding-top: 4rem;
  padding-left: 5rem !important;
  padding-right: 10rem !important;
  font-size: 15px;
}
.textHome {
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  padding-left: 50rem;
  color: black;
}
</style>
