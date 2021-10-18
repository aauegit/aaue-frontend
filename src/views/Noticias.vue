<template>
  <HeaderTitle title="Notícias" :image="getImgURL('noticias.jpg')" />
  <section class="noticias">
    <div class="newsColumn">
      <NoticiasCardPreview
        v-for="noticia in noticias"
        :key="noticia._id"
        :postID="noticia._id"
        :imgURL="getImgURL(`noticias/${noticia.imageLink}`)"
        :titulo="noticia.title"
        :data="noticia.date"
        :categoryColor="noticia.categoryColor"
        :textPreview="noticia.paragraphs[0]"
        @click="setNoticia(noticia)"
      />
    </div>
    <Sidebar />
  </section>
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
.noticias {
  display: flex;
  padding: 75px;
  padding-top: 15vh;
  padding-bottom: 100px;

  .newsColumn {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #bebebe57;
  }
}

@media (max-width: 1016px) {
  .noticias {
    flex-direction: column;
    padding: 75px 47px;

    .newsColumn {
      border-right: none;
    }
  }

  .pageContent {
    padding-top: 0vh;
  }
}

@media (max-width: 700px) {
  .noticias {
    padding: 30px;
  }
}
</style>
