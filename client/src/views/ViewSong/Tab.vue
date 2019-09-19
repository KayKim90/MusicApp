<template> 
  <v-card
    id="tabPosition"
    width="550"
  >
    <v-card-title>Tab</v-card-title>
    <v-card-text><pre><h5 class="overline">{{song.tab}}</h5></pre></v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['song'],
  methods: {
  
  },
  async mounted() {
  },
}
</script>

<style scoped>
textarea {
  width: 90%;
  font-family: monospace;
  border: none;
  border-style: none;
  overflow: auto;
  padding: 20px;
}
#tabPosition {
  position: static;
  z-index: 0;
  margin-left: 440px;
}
.song pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
}
</style>
