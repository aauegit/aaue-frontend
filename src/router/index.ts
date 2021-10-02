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
    path: '/noticias/:id',
    name: 'NoticiaPost',
    component: () => import(/* webpackChunkName: "NoticiaPost" */ '../views/NoticiaPost.vue')
  },
  {
    path: '/discursos',
    name: 'Discursos',
    component: () => import(/* webpackChunkName: "Discursos" */ '../views/Discursos.vue')
  },
  {
    path: '/setores',
    name: 'Setores',
    component: () => import(/* webpackChunkName: "Setores" */ '../views/Associacao/Setores.vue'),
  },
  {
    path: '/seccoes-autonomas',
    name: 'Autonomas',
    component: () => import(/* webpackChunkName: "Autonomas" */ '../views/Associacao/Autonomas.vue'),
  },
  {
    path: '/presidencia',
    name: 'Presidencia',
    component: () => import(/* webpackChunkName: "Presidencia" */ '../views/Associacao/Presidencia.vue'),
  },
  {
     path: '/fiscal',
    name: 'Fiscal',
    component: () => import(/* webpackChunkName: "Fiscal" */ '../views/Associacao/Fiscal.vue'),
  },
  {
    path: '/assembleia-magna',
    name: 'Assembleia',
    component: () => import(/* webpackChunkName: "Assembleia" */ '../views/Associacao/Assembleia.vue'),
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "Sobre" */ '../views/Associacao/Sobre.vue'),
  },
  {
    path: '/protocolos-e-parcerias',
    name: 'Protocolos',
    component: () => import(/* webpackChunkName: "Protocolos" */ '../views/Associacao/Protocolos.vue'),
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
  {
    path: '/api',
    name: 'Api',
    component: () => import(/* webpackChunkName: "Api" */ '../views/Api.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
