<template>
<v-container grid-list-x1 text-center> 
  <v-layout align-center justify-center>
    <v-form>
      <v-flex>
        <div class="pt-6"> 
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Login</div>
              <v-list-item-title class="headline mb-1">MUSIC STORAGE</v-list-item-title>
              <v-list-item-subtitle class="purple--text">WELCOME</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>

        <div v-if="error">
          <h1 class="error overline" v-html="error"></h1>
        </div>
        
        <div class="pl-4 pr-4 pt-6 pb-2">
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
          <v-btn @click="login" depressed block outlined>Login</v-btn>
        </div>
      </v-flex>
    </v-form>
  </v-layout> 
</v-container>
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
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Songs'
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
  color: white;
}
.v-application .error {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: orange !important;
}
</style>
