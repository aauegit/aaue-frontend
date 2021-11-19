<template>
  <HeaderTitle title="Notícias" :image="getImgURL('noticias.jpg')" />
  <section class="noticias">
    <div class="newsColumn" v-if="noticiasAreLoading">
      <NoticiasCardPreviewLoading v-for="index in 10" :key="index" />
    </div>
    <div class="newsColumn" v-else>
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
import NoticiasCardPreviewLoading from "../components/NoticiasCardPreviewLoading.vue";
import Sidebar from "@/components/Sidebar.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import { getImgURL } from "@/functions/globals.js";

export default {
  name: "Noticias",
  data() {
    return {
      noticiasAreLoading: true,
      activatedNavbar: false,
    };
  },
  components: {
    NoticiasCardPreview,
    NoticiasCardPreviewLoading,
    HeaderTitle,
    Sidebar,
  },
  computed: {
    noticias() {
      return this.$store.getters.getAllNoticias;
    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        if (this.noticiasAreLoading) {
          this.noticiasAreLoading = this.$store.getters.getIsNoticiasLoading;
        }
      }, 1000);
    }
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
