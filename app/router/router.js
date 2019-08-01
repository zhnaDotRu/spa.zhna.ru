import Vue from 'vue';
import VueRouter from 'vue-router';
import tariffs from '../components/tariffs.vue';
import price from '../components/price.vue';
import tariffSelection from '../components/tariff-selection.vue';
import notFound from '../components/404.vue';

Vue.use(VueRouter);
const routes = [
  { 
    path: '/', 
    component: tariffs 
  },
  { 
    path: '/tariff/:tId/',
    component: price,
  },
  { 
    path: '/tariff/:tId/price/:id',
    component: tariffSelection,
  },
  { 
    path: '*',
    component: notFound 
  },
  { 
    path: '404',
    component: notFound 
  },
];

const router = new VueRouter({mode: 'history', routes});

export default router;