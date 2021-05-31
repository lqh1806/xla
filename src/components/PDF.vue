<template>
  <div class="pdf">
    <PDFJSViewer :path="`${path}`" :fileName="`${name}`" class="pdfviewer" />
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
.pdf .pdfviewer {
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
import PDFJSViewer from './PDFJSViewer';

export default {
  components: {
    PDFJSViewer,
  },
  data() {
    return {
      name: 'Chuong2.pdf', //change which pdf file loads
      path: 'lib/pdfjs-2.7.570-dist/web/viewer.html', //path of the PDF.js viewer.html
    };
  },
  methods: {
    change(i) {
      switch (i) {
        case 2:
          this.name = 'Chuong2.pdf';
          break;
        case 3:
          this.name = 'Chuong3.pdf';
          break;
        case 4:
          this.name = 'Chuong4.pdf';
          break;
        case 5:
          this.name = 'Chuong4B.pdf';
          break;
        case 6:
          this.name = 'Chuong5.pdf';
          break;
        case 7:
          this.name = 'Chuong6.pdf';
          break;
      }
    },
  },
};
</script>
