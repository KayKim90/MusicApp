<template> 
  <v-card
    id="lyricsPosition"
    width="550"
  >
    <v-card-title>Lyrics</v-card-title>
    <v-card-text><pre><h2 class="caption">{{song.lyrics}}</h2> </pre></v-card-text>
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
#lyricsPosition {
  position: static;
  z-index: 0;
  margin-left: 440px;
  margin-bottom:1em;
}
.song pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
}
</style>
