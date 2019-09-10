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
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
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
    ],
    options:{
      descending: true
    },
    bookmarks: [],
    selected:[]
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
}
</script>
