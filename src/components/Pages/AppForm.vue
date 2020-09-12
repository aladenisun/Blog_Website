<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-row class="justify-center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="20"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="I've read and accept the privacy policy"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
      </v-row>
      <v-row class="justify-center">
        <v-btn
          :disabled="$store.state.loading"
          :loading="$store.state.loading"
          color="secondary"
          class="mr-4"
          @click="submitApplication"
          >Subscribe</v-btn
        >
        <v-btn :disabled="$store.state.loading" :loading="$store.state.loading" @click="clear"
          >clear</v-btn
        >
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },

  data: () => ({
    name: '',
    email: '',
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submitApplication() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('submitApplication', this.applicant)
      }
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.checkbox = false
    }
  }
}
</script>
