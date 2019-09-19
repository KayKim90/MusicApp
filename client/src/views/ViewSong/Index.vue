<template>
<div id="app">
  <div class="fillTopScreen">
  </div>
  <Song-metadata :song="song" />
         <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <You-tube :youtubeId="song.youtubeId" /> 
          <Lyrics :song="song" />
          <Tab :song="song" />     
          <div id="emtpySpace"></div>
        </v-flex>
      </v-layout>
    <div class="fillBaseScreen">
  </div>
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
    song: {},
    a: null,
    b: false
  }),
  async mounted() {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },

}
</script>

<style scoped>
.fillTopScreen {
  position: fixed;
  background-color: #fafafa;
  top:0;
	width: 100%;
	height:128px;
  z-index: 1;

}
.fillBaseScreen {
  background-color: #fafafa;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
}
#emtpySpace {
  margin-top: 5px;
  margin-left: 440px;
  width: 550px;
  height: 80px; 
  background-color: white;
  position: static;
}
</style>
