<template>
  <nav>
    <v-toolbar flat>
      <router-link to="/">
        <v-toolbar-title class="text-upbbercase">
          <span class="font-weight-light">Music</span>
          <span>Storage</span>               
        </v-toolbar-title> 
      </router-link>
      
      <!-- <v-toolbar-items>
        <v-btn
          class="mx-2" outlined 
          :to="{ name:'Songs', route: '/songs'}"> 
          Browse
        </v-btn>
      </v-toolbar-items> -->
      <v-btn
        class="mx-2" outlined 
        :to="{ name:'Songs', route: '/songs'}"> 
        Browse
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        class="mx-2" outlined 
        :to="{ name:'Register', route: '/register'}">
        <span>Signup</span>
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        class="mx-2" outlined
        :to="{ name:'Login', route: '/login'}">
        <span>Login</span>
      </v-btn>
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        class="mx-2" outlined
        @click="logout">
        <span>Logout</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect
      this.$router.push({
        name: 'Main'
      })
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.v-toolbar__title {
    color: black;
}
</style>
