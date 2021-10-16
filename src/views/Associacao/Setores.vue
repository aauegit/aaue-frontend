<template>
  <div class="setores">
    <ul class="indice">
      <div>
        <li v-for="setor in setores" :key="setor.id">
          <a @click="currentSetor = setor">
            <i :class="setor.icon"></i>
            <p>{{ setor.nome }}</p>
          </a>
        </li>
      </div>
    </ul>
    <Setor v-if="currentSetor" :setor="currentSetor" />
  </div>
</template>

<script>
import Setor from "@/components/Setor.vue";
import { getImgURL } from "@/functions/globals.js";
import setores from "@/static/setores.json";

export default {
  name: "Setores",
  data() {
    return {
      setores: setores,
      currentSetor: setores[0],
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
.setores {
  display: flex;

  .indice {
    margin: 75px 0 0 30px;
    display: flex;
    flex-direction: row;
    text-align: left;
    min-width: 35%;
    font-size: 10px;

    i {
      font-size: 30px;

      span {
        font-family: sans-serif;
        margin-left: 10px;
        letter-spacing: 5px;
      }
    }

    li a {
      opacity: 1;
      display: flex;
      justify-content: left;
      align-items: center;
      font-size: 10px;
      color: #555;
      padding: 0px 10px 20px 10px;
      max-width: 65%;

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
}

@media (max-width: 1016px) {
  .setores .indice {
    margin-left: 0;

    li a {
      padding-left: 0;
    }
  }
  .setores {
    padding: 20px;
    flex-direction: column;
  }
}
</style>
