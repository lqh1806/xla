<template>
  <div>
    <iframe height="100%" width="100%" :src="`${getFilePath}`"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PDFJSViewer',
  props: {
    fileName: String,
    path: String,
  },
  computed: {
    getFilePath() {
      if (this.fileName !== '') {
        return this.path + '?file=' + this.fileName;
      }
      return this.path;
    },
  },
};
</script>
<style scoped>
div {
  height: 100%;
}
</style>
