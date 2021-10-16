<template>
  <div class="sidebar">
    <form class="search" method="get" @submit.prevent>
      <i class="fas fa-search"></i>
      <input class="searchBar" type="search" placeholder="Pesquisar ..." />
    </form>
    <h1>Notícias recentes</h1>
    <hr />
    <ul class="artigos">
      <li v-for="noticia in noticias.slice(0, 5)" :key="noticia._id">
        <router-link
          :to="getRoute(noticia._id)"
          @click="setNoticia(noticia) && snapToElement('.headerTitle')"
        >
          {{ noticia.title }}
        </router-link>
      </li>
    </ul>
    <h1>Categorias</h1>
    <hr />
    <ul class="categorias">
      <li><router-link to="/">Comunicados</router-link></li>
      <li><router-link to="/">Desporto</router-link></li>
      <li><router-link to="/">Discursos</router-link></li>
      <li><router-link to="/">Ensino</router-link></li>
      <li><router-link to="/">Geral</router-link></li>
      <li><router-link to="/">Política</router-link></li>
    </ul>
  </div>
</template>

<script>
import { snapToElement } from "@/functions/globals";
export default {
  name: "Sidebar",
  computed: {
    noticias() {
      return this.$store.getters.getAllNoticias;
    },
  },
  methods: {
    snapToElement,
    getRoute(id) {
      return `/noticias/${id}`;
    },
    setNoticia(noticia) {
      this.$store.commit("setCurrentNoticia", noticia);
      snapToElement("body");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 80vh;
  padding-left: 20px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 15vh;

  .search {
    position: relative;

    i {
      position: absolute;
      font-size: 20px;
      top: 15%;
      left: 10px;
      opacity: 0.5;
    }
  }

  .searchBar {
    padding: 10px 10px 10px 40px;
    margin-bottom: 30px;
  }

  hr {
    width: 100px;
    background: red;
    border: 1px solid red;
    margin: 5px 0px;
  }

  .artigos,
  .categorias {
    list-style: disc outside none !important;

    li {
      margin: 20px;
      max-width: 200px;
      list-style: disc outside none !important;

      &::before {
        content: "\200B";
      }
    }
  }
}

@media (max-width: 1016px) {
  .sidebar input {
    width: 100%;
  }
  .sidebar .artigos li {
    max-width: 600px;
  }
}
</style>
