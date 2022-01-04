<template>
  <section class="estatutos">
    <div class="estatutosCards">
      <EstatutoCard
        class="estatutosEstudantes"
        v-for="estatuto in estatutos"
        :key="estatuto.id"
        :nome="estatuto.nome"
        :icon="estatuto.icon"
        :ficheiro="estatuto.ficheiro"
      />
    </div>
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

  .estatutosCards {
    display: flex;
    flex-direction: column;

    .estatutosEstudantes {
      margin: 20px 0 !important;
    }
  }

  .pdf {
    margin-right: 20px;
  }
}
</style>
