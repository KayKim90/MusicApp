<template>
   <v-container class="pt-10 mt-10">
    <v-layout justify-center>
      <v-flex xs12 sm8 md8 lg6>
          <v-text-field
            v-model="search"
            label="Search by title, artist, album or genre"
            hide-details
            prepend-icon="search"
            single-line
          ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import _ from 'lodash'

export default {
    data: () => ({
    search: ''
  }),
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'Songs'
      }
      if(this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>
<style scoped>

</style>