<template>
<div>
  <h1>in index</h1>
  <v-layout>
    <Song-metadata :song="song" />
    <Tab :song="song" />
    <!-- <v-flex xs6>
      <Song-metadata :song="song" />
    </v-flex>
    <v-flex xs6>
      <Panel title="tabs">
        <textarea readonly v-model="song.tab"></textarea>
      </Panel>
    </v-flex> -->
  </v-layout>

<v-layout>
  <You-tube :youtubeId="song.youtubeId" />
  <Lyrics :song="song" />
  </v-layout>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  components:{
    SongMetadata, 
    YouTube, 
    Lyrics, 
    Tab
  },
  data: () => ({
    song: {}
  }),
  methods: {
  
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
}
</script>

<style scoped>
</style>
