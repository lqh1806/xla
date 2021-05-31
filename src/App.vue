<template>
  <div id="app">
    <TheHeader />
    <TheContent />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import TheContent from './components/TheContent';
export default {
  name: 'App',
  components: { TheHeader, TheFooter, TheContent },
};
</script>

<style>
body {
  font-family: GoogleSans-Regular;
  font-size: 15px;
  margin: 0px;
}
@font-face {
  font-family: 'GoogleSans-Regular';
  src: url('assets/font/GoogleSans-Regular.otf') format('opentype');
}
@font-face {
  font-family: 'GoogleSans-Italic';
  src: url('assets/font/GoogleSans-Italic.otf') format('opentype');
}
@font-face {
  font-family: 'GoogleSans-Bold';
  src: url('assets/font/GoogleSans-Bold.otf') format('opentype');
}
</style>
