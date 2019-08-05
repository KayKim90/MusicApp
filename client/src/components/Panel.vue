<template>
  <v-container class="pt-10" grid-list-xl text-center>
    <v-layout justify-center>
      <v-flex xs12 sm8 md8 lg6>
        <v-toolbar flat dense dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action" />
        </v-toolbar>

        <div class="pl-4 pr-4 pt-4 pb-2">
          <slot>
            No slot content defined
          </slot>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['title'],
  data: () => ({

  }),
};
</script>
