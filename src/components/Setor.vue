<template>
  <div class="setor">
    <div class="infoSetor">
      <div class="textSetor">
        <h1>
          <span>{{ setor.nome }}</span>
        </h1>
        <div class="barrinha">
          <hr />
        </div>
        <div class="coordenadores">
          <setorImageCard
            v-for="(coordenador, index) in setor.coordenadores"
            :key="coordenador.nome"
            :data-index="5 + index"
            :coordenadorImg="getImgURL(coordenador.img)"
            :coordenadorNome="coordenador.nome"
            :coordenadorCargo="coordenador.cargo"
          />
        </div>
        <p>
          <span>{{ setor.descricao }}</span>
        </p>
        <h2>
          <span class="contactInfo"
            >Contacto: <span>{{ setor.contacto }}</span></span
          >
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
      el.style.transform = "translateX(-700px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        onComplete: done,
        delay: el.dataset.index * 0.3,
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

/*@ keyframes fadeIn {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
} */

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.setor {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;

  .infoSetor {
    display: flex;
    justify-content: center;
    width: 100%;

    h1 {
      opacity: 1;
      overflow: hidden;

      span {
        display: block;
        /* transform: translate3d(0, -400px, 0); */
        opacity: 0;
        //animation: fadeIn 1s 0.3s forwards;
        animation: fadeIn 1s forwards;
      }
    }

    .barrinha {
      margin-bottom: 20px;
      overflow: hidden;

      hr {
        display: block;
        /* transform: translate3d(0, -400px, 0); */
        opacity: 0;
        //animation: fadeIn 1s 0.5s forwards;
        animation: fadeIn 1s forwards;
      }
    }

    .coordenadores {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      overflow: hidden;

      .coordenador {
        /* transform: translate3d(0, -400px, 0); */
        opacity: 0;
        //animation: fadeIn 1s 0.8s forwards;
        animation: fadeIn 1s forwards;
      }
    }

    .textSetor {
      text-align: left;
      margin-right: 110px;
      overflow: hidden;

      p {
        margin: 30px 0 30px 0;
        font-size: 20px;
        overflow: hidden;
        span {
          display: block;
          /* transform: translate3d(0, -400px, 0); */
          opacity: 0;
          //animation: fadeIn 1s 1.2s forwards;
          animation: fadeIn 1s forwards;
        }
      }

      h2 {
        font-size: 20px;
        overflow: hidden;

        .contactInfo {
          display: block;
          /* transform: translate3d(0, -400px, 0); */
          opacity: 0;
          //animation: fadeIn 1s 1.5s forwards;
          animation: fadeIn 1s forwards;
        }
      }

      span {
        font-weight: 300;
      }
    }
  }
}

@media (max-width: 1016px) {
  .setor {
    .infoSetor .textSetor {
      margin-right: 0;
      width: 100%;

      h1 {
        text-align: left;
      }

      p {
        width: 100%;
      }
    }
  }
}
</style>
