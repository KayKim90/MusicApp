<template>
  <v-layout column>
    <v-form>
      <v-flex xs6 offset-xs3>
        <div class="pt-10"> 
          <v-toolbar flat dense class="cyan" dark><v-toolbar-title>Register</v-toolbar-title></v-toolbar>
        </div>
        <div class="pl-4 pr-4 pt-4 pb-2">
          <v-text-field 
            type="email"
            name="email"
            v-model="email" 
            label="Email"
            outlined></v-text-field>   
          <v-text-field 
            type="password" 
            name="password"
            v-model="password"
            label="Password" 
            outlined></v-text-field>       
          <v-btn @click="register">Register</v-btn>
          <div class="error" v-html="error"></div>
        </div>
      </v-flex>
    </v-form>
  </v-layout> 
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService' 

export default {
  data: () => ({
    email: '',
    password: '',
    error: null
  }),
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
  background-color: transparent;
}
.v-application .error {
    background-color: #ff525205 !important;
}
</style>
