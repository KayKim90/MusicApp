<template>
  <div class="bookmark pt-10 pl-10 pr-10 pb-10">
    <p class="font-weight-black">Liked musics</p>
    <v-data-table
      :headers="headers"
      :options.sync="options"
      :items="bookmarks"
      single-line
      >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right" @v-on:click="edit()">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
       <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="goToDetail(item)"
      >
        pageview
      </v-icon>
      <v-icon
        small
        @click="unsetAsBookmark(item)"
      >
        delete
      </v-icon>
    </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data: () => ({
    headers: [
      {
        text: 'Title',
        value: 'title'
      }, 
      {
        text: 'Artist',
        value: 'artist'
      },
      {
        text: 'Action',
        value: 'action',
        sortable: false
      }
    ],
    options:{
      descending: true
    },
    bookmarks: [],
  }),
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted() {
      if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index({
        userid: this.user.id
      })).data
    }
  },
  methods: {
    async unsetAsBookmark (item) {
      try {
        await BookmarksService.delete(item.id)
        window.location.reload()
      } catch(err) {   
        alert('Sorry, we cannot unset the bookmark now')
      }
    },
    goToDetail(item) {
      this.$router.push({name: 'Song', params: {songId: item.SongId}})
    }
  }
}
</script>
