<template>
  <v-card
    id="infoPsition"
    width=300
    height=395
  >
   <v-img class="white--text" :src="song.albumImageUrl" alt="album image" height="210">
      <v-card-title class="align-end fill-height">{{song.album}}
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn 
              v-if="isUserLoggedIn && !bookmark" 
              @click="setAsBookmark"
              icon 
              v-on="on"
            >
              <v-icon color="grey lighten-1">star</v-icon>
            </v-btn>
          </template>
          <span>Set a bookmark</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn 
              v-if="isUserLoggedIn && bookmark" 
              @click="unsetAsBookmark"
              icon 
              v-on="on"
            >
              <v-icon color="yellow">star</v-icon>
            </v-btn>
          </template>
          <span>Unset a bookmark</span>
        </v-tooltip>
      </v-card-title>          
    </v-img>  
    <v-card-text class="mt-5">
      <v-row>
        <v-col id="colAlign" md="4">
          <h1 class="overline">Title </h1>
            {{song.title}}
        </v-col>
        <v-col id="colAlign" md="4">
          <h1 class="overline">Artist </h1>
            {{song.artist}}
        </v-col>
        <v-col id="colAlign"  md="4">
          <h1 class="overline">Genre </h1>
            {{song.genre}}         
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn      
          id="editBtnPadding"  
          icon
          v-if="$store.state.isUserLoggedIn"
          :to="{
                  name: 'Song-edit', 
                  params () {
                    return {
                      songId: song.id
                    }
                  }
              }"
         >
          <v-icon color="grey lighten-1">edit</v-icon>
        </v-btn> 
      </v-row>
    </v-card-text>
  </v-card>
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
    show: false,
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
        console.log(err)
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
  },
}
</script>

<style scoped>
#colAlign { 
  text-align: center
}
#infoPsition {
  position: fixed;
  left: 210px;
  top: 130px;
}
#editBtnPadding{
  margin-top: 10px;
}
</style>
