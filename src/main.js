import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;

import HomePage from './components/HomePage.vue';
import PDF from './components/PDF.vue';
import Quizz from './components/Quizz.vue';
import Video from './components/Video.vue';

const routes = [
  { path: '/homepage', component: HomePage },
  {
    path: '/pdf',
    component: PDF,
  },
  {
    path: '/quizz',
    component: Quizz,
  },
  {
    path: '/video',
    component: Video,
  },
];
const router = new VueRouter({
  routes,
});
Vue.use(VueRouter);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
