<template>
<v-app>
  <Panel title='Add Song'>
    <v-text-field 
      class="pt-5"
      name="title"
      v-model="song.title" 
      label="Title"
      :rules="[rules.required]"
      outlined></v-text-field>   
    <v-text-field 
      name="artist"
      v-model="song.artist" 
      label="Artist"
      :rules="[rules.required]"
      outlined></v-text-field>   
    <v-text-field 
      name="genre"
      v-model="song.genre" 
      label="Genre"
      :rules="[rules.required]"
      outlined></v-text-field>   
    <v-text-field 
      name="album"
      v-model="song.album" 
      label="Album"
      :rules="[rules.required]"
      outlined></v-text-field>   
    <v-text-field 
      name="albumImageUrl"
      v-model="song.albumImageUrl" 
      label="Album Image Url"
      :rules="[rules.required]"
      outlined></v-text-field>   
    <v-text-field 
      name="youtubeId"
      v-model="song.youtubeId" 
      label="YouTube"
      :rules="[rules.required]"
      outlined></v-text-field>   
    <v-textarea
      name="lyrics"
      v-model="song.lyrics"
      label="Lyrics"
      :rules="[rules.required]"
      outlined></v-textarea>  
    <v-textarea
      name="tab"
      v-model="song.tab"
      label="Tab"
      :rules="[rules.required]"
      outlined></v-textarea>     
    <div class="error" v-if="error">{{error}}</div>
    <v-btn
      dark
      @click="create">Create</v-btn>   
  </Panel>
</v-app>
</template>
<script>
import SongsService from '@/services/SongsService'

export default {
  data: () => ({
    song: {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }, 
    rules: {
      required: (value) => !!value || 'Required'
    },
    error: null
  }),
  methods: {
    async create() {
      this.error = null
      const areAllFieildsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if(!areAllFieildsFilledIn) {
        this.error = 'Please enter all required fields'
        return
      }
      // Call post song API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'Songs'
        })
      } catch (err) {
        /* eslint-disable no-console */
        console.log(err)
        /* eslint-enable no-console */
      }    
    }
  }
}
</script>
<style scoped>
.error {
  padding-top: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: purple;
  background-color: transparent;
}
.v-application .error {
    background-color: #ff525205 !important;
}
</style>
