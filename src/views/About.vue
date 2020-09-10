<template>
  <div class="about">
    <h1 class="textHome">UNAPOLOGETIC SUNRISE</h1>
    <about-page />
  </div>
</template>

<script>
import AboutPage from '@/components/Pages/AboutPage'
export default {
  name: 'About',
  components: {
    AboutPage
  }
}
</script>
<style>
.textHome {
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  padding-left: 50rem;
  color: black;
}
</style>
