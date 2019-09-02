<template>
<div>
  <v-layout>
    <v-flex xs6>
      <Panel title="Song Metadata">
      <v-layout align-center>
        <v-flex xs6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" alt="album image" />
          <br>
          {{song.album}}
        </v-flex>
      </v-layout>
      </Panel>
    </v-flex>
    <v-flex xs6>
      <Panel title="tabs">
        <textarea readonly v-model="song.tab"></textarea>
      </Panel>
    </v-flex>
  </v-layout>

<v-layout>
    <v-flex xs6>
      <Panel title="Youtube">

      </Panel>
    </v-flex>
    <v-flex xs6>
      <Panel title="Lyrics">
        <textarea readonly v-model="song.lyrics"></textarea>
      </Panel>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
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
