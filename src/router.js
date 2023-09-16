import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import About from './views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
