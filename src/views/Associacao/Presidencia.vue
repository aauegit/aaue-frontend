<template>
  <div class="pageContent">
    <div class="presidencia">
      <h1>Presidência</h1>
      <hr />
      <div class="membros">
        <MembroDirecao
          id="membro"
          v-for="membro in membros"
          :key="membro.id"
          :img="getImgURL(membro.img)"
          :nome="membro.nome"
          :cargo="membro.cargo"
          :fb="membro.fb"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MembroDirecao from "@/components/MembroDirecao.vue";
import { getImgURL } from "@/functions/globals.js";
import presidencia from "@/static/presidencia.json";

export default {
  name: "Presidencia",
  data() {
    return {
      membros: [],
    };
  },
  components: {
    MembroDirecao,
  },
  created() {
    this.membros = presidencia;
  },
  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss" scoped>
.pageContent {
  padding-top: 15vh;
}

.presidencia {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 150px;

  h1,
  hr {
    margin-left: 100px;
  }
}

.membros {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 150px;

  #membro {
    flex: 0 0 45%;
  }
}
</style>
