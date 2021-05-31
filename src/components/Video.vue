<template>
  <div class="pdf">
    <iframe :src="`${srcVideo}`" allowfullscreen class="video"></iframe>
    <div class="menu">
      <div class="item chap2" @click="change(2)">Chương 2</div>
      <div class="item chap3" @click="change(3)">Chương 3</div>
      <div class="item chap4" @click="change(4)">Chương 4</div>
      <div class="item chap4B" @click="change(5)">Chương 4B</div>
      <div class="item chap5" @click="change(6)">Chương 5</div>
      <div class="item chap6" @click="change(7)">Chương 6</div>
    </div>
  </div>
</template>

<style scoped>
.pdf {
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 110px;
}
.pdf .video {
  position: relative;
  left: 0;
  top: 0;
  width: 64%;
  height: 100%;
}
.pdf .menu {
  position: absolute;
  right: 0;
  top: 0;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.pdf .menu .item {
  height: 16.6%;
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding-top: 5%;
  border-bottom: 1px solid red;
}
.pdf .menu .item:hover {
  background-color: rgb(248, 85, 85);
  color: white;
}
</style>

<script>
export default {
  data() {
    return {
      srcVideo: 'https://www.youtube.com/embed/qpxgR4cpJQg?autoplay=1&mute=0',
    };
  },
  methods: {
    change(i) {
      switch (i) {
        case 2:
          this.srcVideo =
            'https://www.youtube.com/embed/qpxgR4cpJQg?autoplay=1&mute=0';
          break;
        case 3:
          this.srcVideo =
            'https://www.youtube.com/embed/8GPvDlu37As?autoplay=1&mute=0';
          break;
        case 4:
          this.srcVideo =
            'https://www.youtube.com/embed/wg5FnofIkiY?autoplay=1&mute=0';
          break;
        case 5:
          this.srcVideo =
            'https://www.youtube.com/embed/scchAwhbppk?autoplay=1&mute=0';
          break;
        case 6:
          this.srcVideo =
            'https://www.youtube.com/embed/2pnksgSsw0E?autoplay=1&mute=0';
          break;
        case 7:
          this.srcVideo =
            'https://www.youtube.com/embed/eyAnKcSlKJ8?autoplay=1&mute=0';
          break;
      }
    },
  },
};
</script>
