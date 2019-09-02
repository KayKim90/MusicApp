<template>
  <v-layout column>
   <Songs-search-panel />
   <Songs-panel class="mt-2" />
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
export default {
  components:{
    SongsPanel,
    SongsSearchPanel
  },
  data: () => ({
    songs: null
  }),
  async mounted() {
    // request to the backend for all songs
    this.songs = (await SongsService.index()).data
  },
  methods: {
  }
}
</script>

<style scoped>
.song {
  /* padding: 10px;
  height: 330px; */
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
</style>
