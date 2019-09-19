<template> 
  <v-card
    width="550"
    id="videoPosition"
  >
    <v-card-title>Video</v-card-title>
    <v-card-text align="center">  
      <youtube 
        :video-id="youtubeId"
        :player-vars="{ controls: 0, loop:1 }"  
        :player-width="500"
        :player-height="320" />
    </v-card-text>
  </v-card>
<!-- <v-layout>
  <youtube 
    id="videoPosition"
    :video-id="youtubeId"
    :player-vars="{ controls: 0, loop:1 }"  
    :player-width="500" />
</v-layout> -->
</template>

<script>
export default {
  props: ['youtubeId'],
  data: () => ({
    song: {}
  }),
  methods: {
  
  },
  async mounted() {
  },
}
</script>

<style scoped>
#videoPosition {
  margin-top:130px;
  position: static;
  z-index: 0;
  margin-left: 440px;
  margin-bottom:1em;
}
</style>
