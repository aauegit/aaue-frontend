import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/noticias",
    name: "Noticias",
    component: () =>
      import(/* webpackChunkName: "Noticias" */ "../views/Noticias.vue"),
  },
  {
    path: "/noticias/:id",
    name: "NoticiaPost",
    component: () =>
      import(/* webpackChunkName: "NoticiaPost" */ "../views/NoticiaPost.vue"),
  },
  {
    path: "/rececao-ao-caloiro",
    name: "Rececao",
    component: () =>
      import(/* webpackChunkName: "Rececao" */ "../views/Rececao.vue"),
  },
  {
    path: "/setores",
    name: "Setores",
    component: () =>
      import(
        /* webpackChunkName: "Setores" */ "../views/Associacao/Setores.vue"
      ),
  },
  {
    path: "/seccoes-autonomas",
    name: "Autonomas",
    component: () =>
      import(
        /* webpackChunkName: "Autonomas" */ "../views/Associacao/Autonomas.vue"
      ),
  },
  {
    path: "/presidencia",
    name: "Presidencia",
    component: () =>
      import(
        /* webpackChunkName: "Presidencia" */ "../views/Associacao/Presidencia.vue"
      ),
  },
  {
    path: "/tesouraria",
    name: "Tesouraria",
    component: () =>
      import(
        /* webpackChunkName: "Presidencia" */ "../views/Associacao/Tesouraria.vue"
      ),
  },
  {
    path: "/administradores",
    name: "Administradores",
    component: () =>
      import(
        /* webpackChunkName: "Presidencia" */ "../views/Associacao/Administradores.vue"
      ),
  },
  {
    path: "/secretarios",
    name: "Secretarios",
    component: () =>
      import(
        /* webpackChunkName: "Presidencia" */ "../views/Associacao/Secretarios.vue"
      ),
  },
  {
    path: "/fiscal",
    name: "Fiscal",
    component: () =>
      import(/* webpackChunkName: "Fiscal" */ "../views/Associacao/Fiscal.vue"),
  },
  {
    path: "/assembleia-magna",
    name: "Assembleia",
    component: () =>
      import(
        /* webpackChunkName: "Assembleia" */ "../views/Associacao/Assembleia.vue"
      ),
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: () =>
      import(/* webpackChunkName: "Sobre" */ "../views/Associacao/Sobre.vue"),
  },
  {
    path: "/estatutos",
    name: "Estatutos",
    component: () =>
      import(
        /* webpackChunkName: "Estatutos" */ "../views/Associacao/Estatutos.vue"
      ),
  },
  {
    path: "/guia-estudante",
    name: "GuiaEstudante",
    component: () =>
      import(
        /* webpackChunkName: "GuiaEstudante" */ "../views/Associacao/GuiaEstudante.vue"
      ),
  },
  {
    path: "/guia-do-estudante",
    name: "GuiaDoEstudante",
    component: () =>
      import(
        /* webpackChunkName: "GuiaEstudante" */ "../assets/guias/Guia-do-Estudante.pdf"
      ),
  },
  {
    path: "/protocolos-e-parcerias",
    name: "Protocolos",
    component: () =>
      import(
        /* webpackChunkName: "Protocolos" */ "../views/Associacao/Protocolos.vue"
      ),
  },
  {
    path: "/servicos",
    name: "Servicos",
    component: () =>
      import(/* webpackChunkName: "Servicos" */ "../views/Servicos.vue"),
  },
  {
    path: "/contactos",
    name: "Contactos",
    component: () =>
      import(/* webpackChunkName: "Contactos" */ "../views/Contactos.vue"),
  },
  {
    path: "/denuncias",
    name : "Denuncias",
    component: () =>
      import(/* webpackChunkName: "Denuncias" */ "../views/Denuncias.vue")
  },
  {
    path: "/api",
    name: "Api",
    component: () => import(/* webpackChunkName: "Api" */ "../views/Api.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
