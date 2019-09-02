<template> 
 <Panel title="Youtube Video">
    <v-layout align-center>
       <v-flex xs6>
         <youtube :video-id="youtubeId"
         :player-width="300" 
         :player-heigt="300" />
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
export default {
  props: ['youtubeId'],
  data: () => ({
    song: {}
  }),
  methods: {
  
  },
  async mounted() {
  },
}
</script>

<style scoped>
.song {
  padding: 10px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
  padding-bottom: 10px;
}

.album-image {
  width: 70%;
}
textarea {
  width: 90%;
  font-family: monospace;
  border: none;
  border-style: none;
  overflow: auto;
  padding: 20px;
}
</style>
