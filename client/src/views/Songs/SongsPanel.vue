<template>
  <v-app>
    <v-container class="pt-10" grid-list-lg>
      <v-layout align-center justify-center> 
        <v-flex xs12 sm8 md8 lg6>
          <v-row>
            <h1 class="display-1">SONGS</h1>    
            <v-spacer></v-spacer>
            <v-btn
              v-if="$store.state.isUserLoggedIn"
              slot="action"
              :to="{name: 'Songs-create'}"
              small
              outlined
              fab
            >
              <v-icon>add</v-icon>
            </v-btn>         
          </v-row>
          <v-row>
            <h1 class="overline">Find your favorite music today!</h1>        
          </v-row>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
      <v-layout justify-center text-center> 
        <v-flex xs12 sm8 md8 lg6>
         <div class="pl-4 pr-4 pb-2">
            <div class="song" v-for="song in songs" :key="song.id">
              <v-layout align-center>
                <v-flex xs6>
                  <div class="song-title">{{song.title}}</div>
                  <div class="song-artist">{{song.artist}}</div>
                  <div class="song-genre">{{song.genre}}</div>
                  <v-btn
                    outlined
                    :to="{name: 'Song', params: {songId: song.id}}">Details</v-btn>
                </v-flex>
                <v-flex xs6>
                  <img class="album-image" :src="song.albumImageUrl" alt="album image" />
                </v-flex>
              </v-layout>
            <v-divider></v-divider>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data: () => ({
    songs: null
  }),
  // async mounted() {
  //   // request to the backend for all songs
  //   this.songs = (await SongsService.index()).data
  // },
  methods: {
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding-top: 10px;
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
