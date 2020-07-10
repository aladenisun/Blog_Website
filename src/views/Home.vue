<template>
  <div class="home" :fullscreen="$vuetify.breakpoint.mobile">
    <h1 class="textHome">UNAPOLOGETIC SUNRISE</h1>
    <blog-article />
  </div>
</template>

<script>
import BlogArticle from '@/components/BlogArticle.vue'
export default {
  name: 'Home',
  components: {
    BlogArticle
  }
}
</script>

<style>
.textHome {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  padding-left: 50rem;
  color: black;
}
</style>
