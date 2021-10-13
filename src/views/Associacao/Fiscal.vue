<template>
  <div class="presidencia">
    <h1>Conselho Fiscal</h1>
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
</template>

<script>
import MembroDirecao from "@/components/MembroDirecao.vue";
import { getImgURL } from "@/functions/globals.js";
import fiscal from "@/static/fiscal.json";

export default {
  name: "Fiscal",
  data() {
    return {
      membros: fiscal,
    };
  },
  components: {
    MembroDirecao,
  },
  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss" scoped>
.presidencia {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 75px;

  h1,
  hr {
    margin-left: 5px;
  }

  h1 {
    font-size: 30px;
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
    flex: 0 0 25%;
  }
}
</style>
