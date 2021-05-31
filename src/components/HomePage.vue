<template>
  <div class="content" id="slider">
    <figure>
      <img src="../assets/images/welcome_ptit.png" alt="" />
      <img src="../assets/images/Banner-CNNT.png" alt="" />
      <img src="../assets/images/xla.jpg" alt="" />
      <img src="../assets/images/Logo_PTIT.jpg" alt="" />
    </figure>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.content {
  width: 100%;
}

#slider {
  position: absolute;
  top: 60px;
  bottom: 110px;
}

#slider figure {
  position: relative;
  height: 100%;
  width: 500%;
  left: 0;
  margin: 0;
  animation: 20s slider infinite;
}

#slider figure img {
  width: 20%;
  height: 100%;
  float: left;
}

@keyframes slider {
  0% {
    left: 0;
  }
  20% {
    left: 0;
  }
  25% {
    left: -100%;
  }
  45% {
    left: -100%;
  }
  50% {
    left: -200%;
  }
  70% {
    left: -200%;
  }
  75% {
    left: -300%;
  }
  95% {
    left: -300%;
  }
}
</style>
