<template>
  <div class="pageContent">
    <div class="setores">
      <ul class="indice">
        <div>
          <h1>Secção Autónoma da Comunicação</h1>
          <li v-for="setor in SAComunicacao" :key="setor.id">
            <a @click="currentSetor = setor">
              <i :class="setor.icon"></i>
              <p>{{ setor.nome }}</p>
            </a>
          </li>
          <h1>Secção Autónoma Desportiva</h1>
          <li v-for="setorSAD in SADesportiva" :key="setorSAD.id">
            <a @click="currentSetor = setorSAD">
              <i :class="setorSAD.icon"></i>
              <p>{{ setorSAD.nome }}</p>
            </a>
          </li>
        </div>
      </ul>
      <Setor v-if="currentSetor" :setor="currentSetor"></Setor>
    </div>
  </div>
</template>

<script>
import Setor from "@/components/Setor.vue";
import autonomas from "@/static/autonomas.json";
import sadesportiva from "@/static/sadesportiva.json";
import { getImgURL } from "@/functions/globals.js";

export default {
  name: "Setores",
  data() {
    return {
      SAComunicacao: autonomas,
      SADesportiva: sadesportiva,
      currentSetor: {},
    };
  },

  components: {
    Setor,
  },
  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss" scoped>
$specialColor: #155781;
.pageContent {
  padding-top: 15vh;
}

.setores {
  display: flex;
  padding-bottom: 100px;

  .indice {
    margin: 75px 0 0 30px;
    display: flex;
    flex-direction: row;
    text-align: left;
    min-width: 35%;
    font-size: 10px;

    h1 {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    li a {
      opacity: 1;
      display: flex;
      justify-content: left;
      align-items: center;
      font-size: 10px;
      color: #555;
      padding: 0px 10px 20px 10px;

      i {
        font-size: 20px;
        padding: 15px;
        border-radius: 50%;
        background-color: #18191a;
        color: white;
      }

      p {
        position: relative;
        margin-left: 10px;
        font-size: 20px;

        &:hover {
          scale: 0.98;
          &:before {
            color: #000000;
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $specialColor;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
      }
    }
  }
}

.setor {
  margin-top: 75px;
  height: auto;
}
</style>
