import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import(/* webpackChunkName: "Noticias" */ '../views/Noticias.vue')
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: () => import(/* webpackChunkName: "Eventos" */ '../views/Eventos.vue')
  },
  {
    path: '/discursos',
    name: 'Discursos',
    component: () => import(/* webpackChunkName: "Discursos" */ '../views/Discursos.vue')
  },
  {
    path: '/queima-das-fitas',
    name: 'Queima',
    component: () => import(/* webpackChunkName: "Discursos" */ '../views/Queima.vue')
  },
  {
    path: '/rececao-ao-caloiro',
    name: 'Rececao',
    component: () => import(/* webpackChunkName: "Discursos" */ '../views/Rececao.vue')
  },
  {
    path: '/associacao',
    name: 'Associacao',
    component: () => import(/* webpackChunkName: "Associacao" */ '../views/Associacao.vue')
  },
  {
    path: '/plataformas',
    name: 'Plataformas',
    component: () => import(/* webpackChunkName: "Plataformas" */ '../views/Plataformas.vue')
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: () => import(/* webpackChunkName: "Servicos" */ '../views/Servicos.vue')
  },
  {
    path: '/contactos',
    name: 'Contactos',
    component: () => import(/* webpackChunkName: "Contactos" */ '../views/Contactos.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
