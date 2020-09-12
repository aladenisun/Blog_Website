<template>
  <v-container>
    <div>im here!</div>
    <v-row justify="center">
      <v-card class="cardEdit" height="700" width="500" color="#e6ddd5">
        <v-row class="justify-center" justify="center">
          <v-img
            max-width="400"
            src="https://c0.wallpaperflare.com/preview/586/792/1009/home-house-plants-leaves.jpg"
            aspect-ratio="1.1"
            contain
          ></v-img>
        </v-row>
        <h1 class="fontFamilyType" align="center" justify="center">NEWSLETTER</h1>
        <p class="fontFamilyType" align="center" justify="center">
          Subscribe to recieve updates on new posts!
        </p>
        <app-form />
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
  color: black !important;
}
.cardEdit {
  background-color: #587264 !important;
}
</style>
