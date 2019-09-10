<template>
<div id="app">
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(text, i) in texts"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ text }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  
      <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>

  <p class="font-weight-black">Used Technology</p>

  <v-container class="pt-5 pb-10">
      <v-row>
        <v-col class="pr-3" cols="12" sm="4">
          <v-card
            id="cardClear"
            class="mx-auto"
            max-width="300px"
            elevation="0"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
            <v-card-title>
              <div>Vue.js</div>
              <span class="grey--text subtitle-1">temp temp temp temp temp temp temp</span>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col class="pr-3" cols="12" sm="4">
     <v-card
            id="cardClear"
            class="mx-auto"
            max-width="300px"
            elevation="0"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
            <v-card-title>
              <div>Node.js</div>
              <span class="grey--text subtitle-1">temp temp temp temp temp temp temp</span>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col class="pr-3" cols="12" sm="4">
     <v-card
            id="cardClear"
            class="mx-auto"
            max-width="300px"
            elevation="0"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
            <v-card-title>
              <div>SQLite</div>
              <span class="grey--text subtitle-1">temp temp temp temp temp temp temp</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  <!-- <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          sm="4"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->

  <v-footer>
    <v-col
      class="text-center"
      cols="12"
    >
      2019 — <strong>Kay Kyungah Kim</strong> &copy; kim900318@gmail.com 
    </v-col>
  </v-footer>
</div>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        texts: [
          'first',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>
<style scoped>
#cardClear {
  background: transparent;
  border: transparent;
}
</style>