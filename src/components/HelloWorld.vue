<template>
  <v-container>
    <v-card color="Unapologetic Sunrise">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">Unapologetic Sunrise</h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="Unapologetic Sunrise" grow>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card color="Unapologetic Sunrise" flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ['Home', 'Categories', 'About', 'Contact Me'],
      text: 'Hello, Hello2, Hello3, Hello4'
    }
  }
}
</script>

<style>
/* Helper classes */
.Unapologetic-Sunrise {
  background-color: rgb(224, 210, 200) !important;
}
.basil--text {
  color: rgb(224, 210, 200) !important;
}
</style>
