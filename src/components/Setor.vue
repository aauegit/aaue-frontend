<template>
  <div class="setor">
    <div class="infoSetor">
      <div class="textSetor">
        <h1>{{ setor.nome }}</h1>
        <hr />
        <transition-group
          class="coordenadores"
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          tag="div"
        >
          <setorImageCard
            v-for="(coordenador, index) in setor.coordenadores"
            :key="coordenador.nome"
            :data-index="index"
            :coordenadorImg="getImgURL(coordenador.img)"
            :fb="coordenador.fb"
            :coordenadorNome="coordenador.nome"
          />
        </transition-group>
        <p>{{ setor.descricao }}</p>
        <h2>
          Contacto: <span>{{ setor.contacto }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import setorImageCard from "@/components/setorImageCard";
import { gsap } from "gsap";
import { getImgURL } from "@/functions/globals.js";

export default {
  name: "Setor",
  props: {
    setor: Object,
  },
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(-50px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        onComplete: done,
        delay: el.dataset.index * 0.1,
      });
    };
    return { beforeEnter, enter };
  },
  components: {
    setorImageCard,
  },
  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss" scoped>
$specialColor: #155781;

.setor {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 150px;

  .infoSetor {
    display: flex;
    justify-content: center;
    width: 100%;

    hr {
      margin-bottom: 20px;
    }

    .coordenadores {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .textSetor {
      text-align: justify;
      margin-right: 110px;

      p {
        margin: 30px 0 30px 0;
        font-size: 20px;
      }

      h2 {
        font-size: 20px;
      }

      span {
        font-weight: 300;
      }
    }
  }
}
</style>
