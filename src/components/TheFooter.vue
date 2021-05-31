<template>
  <div class="footer-container">
    <div class="footer-col-1">
      <h3>Contact us</h3>
      <nav>
        <ul>
          <li>
            <a href="https://www.facebook.com/"
              ><img src="../assets/images/facebook.png" width="35px"
            /></a>
          </li>
          <li>
            <a href="https://mail.google.com/"
              ><img src="../assets/images/gmail.png" width="41px"
            /></a>
          </li>
          <li>
            <a href="https://www.youtube.com/"
              ><img src="../assets/images/youtube.png" width="52px"
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
.navbar {
  display: flex;
  align-items: center;
}
nav {
  flex: 1;
  text-align: left;
}
nav ul {
  display: inline-block;
  list-style-type: none;
  padding-left: 20px;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}
nav ul li a:hover {
  background: rgb(248, 85, 85);
  border-bottom: white;
  color: white;
}

.footer-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 110px;
  padding-top: 20px;
  background-color: rgb(248, 85, 85);
  color: white;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
}
.footer-container nav ul li a {
  display: block;
  padding: 10px;
}
.footer-container nav {
  text-align: center;
}
</style>
