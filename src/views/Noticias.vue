<template>
  <div v-if="!activatedNavbar" class="pageContent">
    <HeaderTitle title="Notícias" :image="getImgURL('noticias.jpg')" />
    <section class="noticias">
      <form class="searchMobile" method="get" @submit.prevent v-if="mobileMode">
        <i class="fas fa-search"></i>
        <input class="searchBar" type="search" placeholder="Pesquisar ..." />
      </form>
      <div class="newsColumn">
        <NoticiasCardPreview
          v-for="noticia in noticias"
          :key="noticia._id"
          :postID="noticia._id"
          :imgURL="getImgURL('activism.jpeg')"
          :titulo="noticia.title"
          :data="noticia.date"
          :categoryColor="noticia.categoryColor"
          :textPreview="noticia.paragraphs[0]"
          @click="setNoticia(noticia)"
        />
      </div>
      <Sidebar v-if="!mobileMode" />
    </section>
  </div>
</template>

<script>
import NoticiasCardPreview from "../components/NoticiasCardPreview.vue";
import Sidebar from "@/components/Sidebar.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import { getImgURL } from "@/functions/globals.js";

export default {
  name: "Noticias",
  data() {
    return {
      activatedNavbar: false,
      mobileMode: false,
    };
  },
  components: {
    NoticiasCardPreview,
    HeaderTitle,
    Sidebar,
  },
  computed: {
    noticias() {
      return this.$store.getters.getAllNoticias;
    },
  },
  methods: {
    getImgURL,
    setNoticia(noticia) {
      this.$store.commit("setCurrentNoticia", noticia);
    },
  },
};
</script>

<style lang="scss">
.pageContent {
  padding-top: 15vh;
}

.noticias {
  display: flex;
  padding: 75px;
  padding-top: 15vh;
  padding-bottom: 100px;

  .searchMobile {
    position: relative;
    margin-bottom: 20px;

    input {
      width: 90%;
      padding: 15px;
      margin: 0 30px;
      border-radius: 25px;
    }

    i {
      background-color: black;
      color: white;
      padding: 17px 20px 17px 20px;
      border-radius: 0px 25px 25px 0px;
      position: absolute;
      right: 5%;
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  .newsColumn {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #bebebe57;
  }
}

@media (max-width: 1016px) {
  .noticias {
    flex-direction: column;
  }

  .pageContent {
    padding-top: 0vh;
  }
}
</style>
