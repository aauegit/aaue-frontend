<template>
  <div v-if="!activatedNavbar" class="pageContent">
    <HeaderTitle title="Discursos" :image="getImgURL('discursos.jpg')" />
    <section class="discurso">
      <div class="newsColumn">
        <DiscursoCardPreview
          v-for="discurso in discursos"
          :key="discurso.id"
          :imgURL="getImgURL(discurso.imgURL)"
          :titulo="discurso.titulo"
          :data="discurso.dataDePublicacao"
          :textPreview="discurso.textPreview"
        />
      </div>
      <Sidebar />
    </section>
  </div>
</template>

<script>
import DiscursoCardPreview from "../components/DiscursoCardPreview.vue";
import Sidebar from "../components/Sidebar.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import { getImgURL } from "@/functions/globals.js";

export default {
  name: "Discursos",
  data() {
    return {
      discursos: [
        {
          id: 0,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso da Assinatura do Contrato",
          dataDePublicacao: "27 Janeiro, 2019",
        },
        {
          id: 1,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso da tomada de posse mandato 2019",
          dataDePublicacao: "27 Janeiro, 2019",
        },
        {
          id: 2,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso 1 de Novembro",
          dataDePublicacao: "5 Dezembro, 2018",
        },
        {
          id: 3,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso UBIKE",
          dataDePublicacao: "5 Dezembro, 2018",
        },
        {
          id: 4,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso da tomada de posse da Reitora",
          dataDePublicacao: "5 Dezembro, 2018",
        },
        {
          id: 5,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso de tomada de posse (1 Janeiro 2018)",
          dataDePublicacao: "5 Dezembro, 2018",
        },
        {
          id: 6,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso da sessão de encerramento da semana ECS",
          dataDePublicacao: "5 Dezembro, 2018",
        },
        {
          id: 7,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso Mecenas",
          dataDePublicacao: "5 Dezembro, 2018",
          textPreview: "",
        },
        {
          id: 8,
          category: "any",
          imgURL: "aaue40anos.jpg",
          titulo: "Discurso de boas vindas",
          dataDePublicacao: "5 Dezembro, 2018",
          textPreview: "",
        },
      ],
    };
  },
  components: {
    DiscursoCardPreview,
    Sidebar,
    HeaderTitle,
  },
  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss">
.pageContent {
  padding-top: 15vh;
}

.discurso {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 100px;

  .newsColumn {
    display: flex;
    flex-direction: column;
  }
}
</style>
