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
      <v-btn
        v-if="isUserLoggedIn && !bookmark" 
        @click="setAsBookmark">
          Bookmark</v-btn>
      <v-btn 
        v-if="isUserLoggedIn && bookmark" 
        @click="unsetAsBookmark">
          Unbookmark</v-btn>
  </Panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: ['song'],
  computed:{
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data:() => ({
    bookmark: null,
  }),
  watch: {
    async song() {
      if(!this.isUserLoggedIn) {
        return
      } 
      try {
        const bookmarks = (await BookmarksService.index({
          songid: this.song.id,
          userid: this.user.id
        })).data
        if(bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        alert('Sorry, we cannot load bookmarks now')
      }
    }
  }, 
  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          songid: this.song.id,
          userid: this.user.id
        })).data
      } catch(err) {
        alert('Sorry, we cannot set the bookmark now')
      }
    },
    async unsetAsBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch(err) {   
        alert('Sorry, we cannot unset the bookmark now')
      }
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
textarea {
  width: 90%;
  font-family: monospace;
  border: none;
  border-style: none;
  overflow: auto;
  padding: 20px;
}
</style>
