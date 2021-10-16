<template>
  <section class="estatutos">
    <EstatutoCard
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
          nome: "Estatutos da AAUE",
          icon: "fas fa-landmark",
          ficheiro: "Estatutos-AAUE-2020.pdf",
        },
        {
          id: 1,
          nome: "Estatutos da Secção de Comunicação da AAUE",
          icon: "fas fa-mail-bulk",
          ficheiro: "Estatutos-Comunicacao.pdf",
        },
        {
          id: 2,
          nome: "Estatutos da Secção Desportiva da AAUE",
          icon: "fas fa-running",
          ficheiro: "Estatutos-Desportiva.pdf",
        },
        {
          id: 3,
          nome: "Regulamento eleitoral da AAUE",
          icon: "fas fa-handshake",
          ficheiro: "Regulamento-Eleitoral-AAUE.pdf",
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
  min-height: 100vh;
  display: grid;
  grid-template-columns: 2;
  border: 2px solid red;
}
</style>
