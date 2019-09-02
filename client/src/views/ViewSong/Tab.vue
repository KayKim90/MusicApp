<template> 
 <Panel title="Tab">
    <textarea readonly v-model="song.tab"></textarea>
  </Panel>
</template>

<script>
export default {
  props: ['song'],
  methods: {
  
  },
  async mounted() {
  },
}
</script>

<style scoped>
textarea {
  width: 90%;
  font-family: monospace;
  border: none;
  border-style: none;
  overflow: auto;
  padding: 20px;
}
</style>
