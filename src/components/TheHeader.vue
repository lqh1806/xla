<template>
  <div class="container">
    <div class="navbar">
      <div class="logo">
        <a href=""><img src="../assets/images/logo.png" width="41px"/></a>
      </div>
      <nav>
        <ul>
          <router-link to="/homepage" class="navbar-item">
            <li><a href="">Trang chủ</a></li>
          </router-link>
          <router-link to="/pdf">
            <li><a href="">Bài giảng</a></li>
          </router-link>
          <router-link to="/quizz">
            <li><a href="">Bài tập</a></li>
          </router-link>
          <router-link to="/video">
            <li><a href="">Video bài giảng</a></li>
          </router-link>
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
.container {
  width: 100%;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  z-index: 1;
  height: 60px;
  left: 0;
  top: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
</style>
