<template>
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
</template>

<script>
import MembroDirecao from "@/components/MembroDirecao.vue";
import { getImgURL } from "@/functions/globals.js";
import presidencia from "@/static/presidencia.json";

export default {
  name: "Presidencia",
  data() {
    return {
      membros: presidencia,
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

  h1 {
    font-size: 30px;
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

@media (max-width: 1016px) {
  .presidencia {
    padding-top: 100px;
  }
}

@media (max-width: 710px) {
  .presidencia {
    padding: 100px 10px 10px 10px;
  }
}
</style>
