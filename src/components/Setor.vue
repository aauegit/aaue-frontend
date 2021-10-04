<template>
  <div class="setor">
    <div class="infoSetor">
      <div class="textSetor">
        <h1>{{ nomeDoSetor }}</h1>
        <hr />
        <transition-group
          class="coordenadores"
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          tag="div"
        >
          <div class="coordenador" key="3">
            <img :src="coordenador1Img" alt="Coordenador" decode="async" />
            <a :href="fb1" target="_blank" rel="noopener noreferrer"
              >{{ coordenador1 }} <i class="fab fa-facebook-square"></i
            ></a>
          </div>
          <div class="coordenador" key="4">
            <img :src="coordenador2Img" alt="Coordenador" decode="async" />
            <a :href="fb2" target="_blank" rel="noopener noreferrer"
              >{{ coordenador2 }} <i class="fab fa-facebook-square"></i
            ></a>
          </div>
          <div v-if="coordenador3" class="coordenador" key="5">
            <img :src="coordenador3Img" alt="Coordenador" decode="async" />
            <a :href="fb3" target="_blank" rel="noopener noreferrer"
              >{{ coordenador3 }} <i class="fab fa-facebook-square"></i
            ></a>
          </div>
          <div
            v-if="
              coordenador4 &&
                nomeDoSetor != 'GAPE' &&
                nomeDoSetor != 'Divulgação'
            "
            class="coordenador"
            key="6"
          >
            <img :src="coordenador4Img" alt="Coordenador" decode="async" />
            <a :href="fb4" target="_blank" rel="noopener noreferrer"
              >{{ coordenador4 }} <i class="fab fa-facebook-square"></i
            ></a>
          </div>
        </transition-group>
        <p>{{ descricao }}</p>
        <h2>
          Contacto: <span>{{ contacto }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Setor",
  props: {
    nomeDoSetor: String,
    coordenador1: String,
    coordenador1Img: String,
    fb1: String,
    coordenador2: String,
    coordenador2Img: String,
    fb2: String,
    coordenador3: String,
    coordenador3Img: String,
    fb3: String,
    coordenador4: String,
    coordenador4Img: String,
    fb4: String,
    descricao: String,
    contacto: String,
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
        duration: 0.2,
        onComplete: done,
        delay: el.dataset.index * 0.1,
      });
    };
    return { beforeEnter, enter };
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
    .coordenador {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 270px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5px;
      }

      a {
        font-weight: bold;
        color: $specialColor;
      }
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
