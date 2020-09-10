<template>
  <div>
    <v-container lass="spacing-playground pa-6" fluid>
      <h1 class="textHome">UNAPOLOGETIC SUNRISE</h1>
      <v-row class="justify-center">
        <pre class="headtext"> WOULD LOVE TO HEAR FROM YOU!</pre>
      </v-row>
      <v-row class="justify-center">
        <v-col>
          <v-card class="justify-center" max-width="400">
            <v-img
              class="white--text align-end"
              width="500p"
              height="700px"
              src="https://c1.wallpaperflare.com/preview/184/137/279/minimalist-plant-shelf-design.jpg"
            >
              <v-card-title class="headtext" color="black">CONTACT US</v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn color="brown" @click="overlay = !overlay">
                via Email
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-overlay :absolute="absolute" :value="overlay">
          <v-card
            class="justify-center"
            align="center"
            max-width="400"
            max-height="900"
            elevation="12"
            color="#dac4b5"
            translate="-50%"
          >
            <v-snackbar v-model="snackbar" absolute top right color="brown">
              <span>Registration successful!</span>
              <v-icon dark>mdi-checkbox-marked-circle</v-icon>
            </v-snackbar>
            <v-form ref="form" @submit.prevent="submit">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.name"
                      :rules="rules.name"
                      color="white"
                      label="NAME"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="form.email"
                      :rules="rules.email"
                      color="white"
                      label="E-MAIL"
                      outlined
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="form.message" color="black" outlined dense>
                      <template v-slot:label>
                        <div>MESSAGE</div>
                      </template>
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-btn text @click="resetForm">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="!formIsValid" text color="secondary" type="submit">Send</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>

          <v-btn color="black" @click="overlay = false"> Exit</v-btn>
        </v-overlay>
        <v-col cols="5">
          <v-card flat>
            <v-card-title class="headtext" justify="center" align="center">
              MANUAL CONTACT INFOMATION</v-card-title
            >
            <v-card-text class="titleContact" justify="center" align="center">
              <v-row> For support or any questions: </v-row
              ><v-row>Email us at support@unapologeticSun.com</v-row>
              <v-card-subtitle> Mailing Address</v-card-subtitle>
              <v-row> 2345 West Elm Street, California, </v-row
              ><v-row> United States. 847284</v-row>
            </v-card-text>
          </v-card>

          <v-img
            class="justify-center"
            max-width="900"
            align="center"
            justify="center"
            src="https://c0.wallpaperflare.com/preview/370/888/844/macro-plant-pot-plants-succulent.jpg"
            aspect-ratio="1"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      name: '',
      email: '',
      message: ''
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        email: [val => (val || '').length > 0 || 'This field is required'],
        name: [val => (val || '').length > 0 || 'This field is required'],
        message: [val => (val || '').length > 0 || 'This field is required']
      },
      snackbar: false,
      defaultForm,
      absolute: true,
      overlay: false
    }
  },

  computed: {
    formIsValid() {
      return this.form.name && this.form.message && this.form.email
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit() {
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
<style>
.headtext {
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  color: black;
}
.titleContact {
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  color: black;
}
.textHome {
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  padding-left: 70rem;
  color: black;
}
</style>
