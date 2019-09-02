<template> 
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
      <v-btn
      :to="{
        name: 'Song-edit', 
        params () {
          return {
            songId: song.id
          }
        }
        }">
        Edit
      </v-btn>
  </Panel>
</template>

<script>

export default {
  props: ['song'],
  methods: {
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
textarea {
  width: 90%;
  font-family: monospace;
  border: none;
  border-style: none;
  overflow: auto;
  padding: 20px;
}
</style>
