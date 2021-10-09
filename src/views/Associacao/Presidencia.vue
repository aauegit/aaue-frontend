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
  padding: 50px 75px;

  h1 {
    font-size: 45px;
    margin-left: 5px;
  }

  hr {
    margin-left: 5px;
  }
}

.membros {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 0px;

  #membro {
    flex: 0 0 45%;
  }
}
</style>
