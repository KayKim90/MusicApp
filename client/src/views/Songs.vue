<template>
  <Panel title="Songs">
    <v-btn
      slot="action"
      @click="navigateTo({name: 'Songs-create'})"
      small
      absolute
      right
      middle
      outlined
      fab>
      <v-icon>add</v-icon>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout align-center>
        <v-flex xs6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
          <v-btn
            outlined
            @click="navigateTo({name: 'Song', params: {songId: song.id}})">Details</v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" alt="album image" />
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </div>
  </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components:{
    Panel
  },
  data: () => ({
    songs: null
  }),
  async mounted() {
    // request to the backend for all songs
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
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
</style>
