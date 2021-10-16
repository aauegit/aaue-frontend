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
          nome: "Estatutos e Regulamentos",
          icon: "fas fa-landmark",
          ficheiro: "estatutos/Estatutos-AAUE-2020.pdf",
        },
        {
          id: 1,
          nome: "Estatutos da Secção de Comunicação",
          icon: "fas fa-mail-bulk",
          ficheiro: "estatutos/Estatutos-Comunicacao.pdf",
        },
        {
          id: 2,
          nome: "Estatutos da Secção Desportiva",
          icon: "fas fa-running",
          ficheiro: "estatutos/Estatutos-Desportiva.pdf",
        },
        {
          id: 3,
          nome: "Regulamento eleitoral",
          icon: "fas fa-handshake",
          ficheiro: "estatutos/Regulamento_Eleitoral_AAUE.pdf",
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
  display: grid;
  gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
