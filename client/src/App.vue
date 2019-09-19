<template>
  <v-app id="dark">
    <PageHeader></PageHeader>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    PageHeader, 
  },
  data: () => ({
    //
  }),
  created () {
    this.$vuetify.theme.light = true
  },
};
</script>
<style scoped>
</style>

