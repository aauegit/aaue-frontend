<template>
  <section class="estatutos">
    <EstatutoCard class="estatuto1"
      v-for="estatuto in estatutos"
      :key="estatuto.id"
      :nome="estatuto.nome"
      :icon="estatuto.icon"
      :ficheiro="estatuto.ficheiro"
    />
  </section>
</template>

<script>
import EstatutoCard from "@/components/EstatutoCard.vue";

export default {
  data() {
    return {
      estatutos: [
        {
          id: 0,
          nome: "Guia do Estudante",
          icon: "fas fa-landmark",
          ficheiro: "guias/Guia-do-Estudante.pdf",
        },
        {
          id: 1,
          nome: "Student's Guide (EN)",
          icon: "fas fa-mail-bulk",
          ficheiro: "guias/Guia-de-Bolsas.pdf",
        },
        {
          id: 2,
          nome: "Guia de bolsas e apoios de estudo",
          icon: "fas fa-running",
          ficheiro: "guias/Guia-de-Bolsas.pdf",
        },
      ],
    };
  },
  components: {
    EstatutoCard,
  },
};
</script>

<style lang="scss" scoped>
.estatutos {
  min-height: 80vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .estatuto1 {
    margin: 10px;
  }
}

@media (max-width: 1000px) {
  .estatutos {
    padding: 100px 50px;
  }
}
@media (max-width: 500px) {
  .estatutos {
    padding: 100px 20px;
  }
}
</style>
