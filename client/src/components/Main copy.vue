<template>
<div id="app">
  <v-carousel
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
  
<!--
      <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
-->

   <h1 class="display-2" id="typoIntro">WHY MUSIC STORAGE?</h1>
  <v-container class="pt-5 pb-10">
      <v-row>
        <v-col class="pr-3" cols="12" sm="4">
          <v-card
            id="cardClear"
            class="mx-auto"
            max-width="250"
            elevation="0"
          >
            <v-img
              src="../assets/logo1.png"
              alt="logo 1"
              height="250"
            ></v-img>
            <v-card-title>
              <div>SHARE EXPERIENCE</div>
              <span class="grey--text subtitle-1">temp temp temp temp temp temp temp</span>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col class="pr-3" cols="12" sm="4">
     <v-card
            id="cardClear"
            class="mx-auto"
            max-width="250px"
            elevation="0"
          >
            <v-img
              src="../assets/logo2.png"
              alt="logo 2"
              height="250px"
            ></v-img>
            <v-card-title>
              <div>LEARN CREATIVITY</div>
              <span class="grey--text subtitle-1">temp temp temp temp temp temp temp</span>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col class="pr-3" cols="12" sm="4">
     <v-card
            id="cardClear"
            class="mx-auto"
            max-width="250px"
            elevation="0"
          >
            <v-img
              src="../assets/logo3.png"
              alt="logo 3"
              height="250px"
            ></v-img>
            <v-card-title>
              <div>BE INSPIRED</div>
              <span class="grey--text subtitle-1">temp temp temp temp temp temp temp</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


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
          'First desc',
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
#typoIntro {
  font-weight: 900;
  text-align: center;
  padding-top: 70px;
}
</style>