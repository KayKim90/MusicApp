<template>
  <Panel title="Search">
    <v-text-field 
      label="Search"
      v-model="search">
    </v-text-field>
  </Panel>
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