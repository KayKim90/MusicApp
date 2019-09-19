<template>
  <nav>
    <!-- <v-toolbar class="mx-auto overflow-hidden" flat> -->
    <!-- <v-toolbar app> -->
      <!-- <v-app-bar class="pl-5 transparent" flat fixed> -->
      <v-app-bar class="pl-5" flat fixed>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <router-link to="/">
           <v-toolbar-title class="text-upbbercase pl-3">
             <span class="font-weight-light">Music</span>
             <span>Storage</span>               
           </v-toolbar-title> 
         </router-link>
        <div class="flex-grow-1"></div>
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
      </v-app-bar>
    <!-- </v-toolbar> -->
     <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
        <v-list-item-group
          v-model="group"
          active-class="deep-grey--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-icon>{{link.icon}}</v-icon>
            <v-list-item-title class="ml-3">{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    links: [
              { icon: 'home', text: 'Home', route: '/' },
              { icon: 'search', text: 'Browse', route: '/songs' },
              { icon: 'star', text: 'Bookmark', route: '/bookmark'}
           ]
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
  watch: {
     group () {
      this.drawer = false
    },
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.v-toolbar__title {
    color: black;
}
.toolbar__content {
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 0px;
}
</style>
