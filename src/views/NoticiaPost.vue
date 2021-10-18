<template>
  <section class="noticia">
    <HeaderTitle title="Notícias" :image="getImgURL('noticias.jpg')" />
    <main class="noticiaPost">
      <div class="noticiaText">
        <h1>{{ noticia.title }}</h1>
        <hr :style="{ borderColor: noticia.categoryColor }" />
        <h2>Publicado a {{ noticia.date }}</h2>
        <img
          v-if="noticia.imageLink"
          :src="getImgURL(`noticias/${noticia.imageLink}`)"
          alt=""
        />
        <p v-for="paragraph in noticia.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
        <p v-if="noticia.signature" class="signature">
          <b>{{ noticia.signature }}</b>
        </p>
      </div>
      <Sidebar />
    </main>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import HeaderTitle from "@/components/HeaderTitle.vue";
import Sidebar from "@/components/Sidebar.vue";
import { getImgURL } from "@/functions/globals.js";
export default {
  setup() {
    const route = useRoute();

    return { route };
  },
  components: {
    HeaderTitle,
    Sidebar,
  },
  methods: {
    getImgURL,
  },
  computed: {
    noticia() {
      return this.$store.getters.getCurrentNoticia;
    },
  },
  async created() {
    if (!this.noticia.hasOwnProperty("category")) {
      await this.$store.dispatch("setCurrentNoticia", this.route.params.id);
    }
  },
};
</script>

<style lang="scss" scoped>
.noticiaPost {
  min-height: 100vh;
  padding: 75px;
  display: flex;
  justify-content: center;

  .sidebar {
    width: 30%;
  }

  .noticiaText {
    padding-right: 50px;
    border-right: 1px solid #bebebe57;
    max-width: 800px;

    img {
      width: 100%;
      padding: 10px 0 20px 0;
      border-bottom: 1px solid #bebebe57;
    }

    hr {
      width: 200px;
      border: 1px solid;
      margin: 7px 0;
    }

    h2 {
      font-size: 16px;
      opacity: 0.6;
    }

    p {
      max-width: 100%;
      margin-top: 25px;
      hyphens: auto;
    }
  }
}
@media (max-width: 1016px) {
  .noticia {
    display: flex;
    flex-direction: column;
    padding: 40px 0px 75px 0;

    .noticiaPost {
      border-right: none;
      flex-direction: column;
      padding: 20px;

      .noticiaText {
        padding-right: 0;
        border-right: none;
      }

      .sidebar {
        margin-top: 50px;
        padding-left: 0;
        width: 100%;
        min-height: 10vh;
      }
    }
  }

  .pageContent {
    padding-top: 0vh;
  }
}
</style>
