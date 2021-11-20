<template>
  <div class="rececao">
    <div class="titulo">
      <i class="fas fa-rocket"></i>
      <h1>A melhor receção ao caloiro está de volta!</h1>
    </div>
    <p class="intro">
      Por excelência, a <b>Receção ao Caloiro</b> é o ponto alto dos primeiros
      tempos de um estudante na Universidade de Évora e, em muitos casos, na sua
      nova cidade. A Receção ao Caloiro destaca-se não só pelo receber por parte
      da academia dos seus novos membros, mas também por ser mais um momento
      onde várias gerações académicas se voltam a reunir, recordando tempos e
      vivências de outrora. Não apenas conhecida pelas noites académicas, de
      concertos e folia no recinto, a Receção destaca-se também pela envolvência
      com o município, no plano cultural, mas também social e patrimonial,
      promovendo assim um primeiro contacto dos novos estudantes da nossa
      cidade, com a sua «nova casa» para os próximos anos.
    </p>
    <div class="cartaz">
      <img :src="getImgURL('rececao/rececao.jpg')" alt="" />
      <ul>
        <h1>
          Afinal de contas é aqui que começam os melhores dias da TUA vida!
        </h1>
        <li @click="showingCartaz = !showingCartaz">
          <div class="text" :class="{ activated: showingCartaz }">
            <i class="fas fa-caret-right"></i>
            <p>#1 - Cartaz</p>
          </div>
          <div>
            <img
              v-if="showingCartaz"
              :src="getImgURL('rececao/rececaoCartazCompleto.jpg')"
              alt=""
            />
          </div>
        </li>
        <li @click="showingGeral = !showingGeral">
          <div class="text" :class="{ activated: showingGeral }">
            <i class="fas fa-caret-right"></i>
            <p>#2 - Bilhetes Gerais</p>
          </div>
          <div class="photo">
            <img
              v-if="showingGeral"
              :src="getImgURL('rececao/rececaoGeral.jpg')"
              alt=""
            />
          </div>
        </li>
        <li @click="showingDiarios = !showingDiarios">
          <div class="text" :class="{ activated: showingDiarios }">
            <i class="fas fa-caret-right"></i>
            <p>#3 - Bilhetes Diários</p>
          </div>
          <div class="photo">
            <img
              v-if="showingDiarios"
              :src="getImgURL('rececao/rececaoDiarios.jpg')"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3119.290940041163!2d-7.9043528!3d38.5731475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19e4dd79fbd2ad%3A0x6a31af5facc62c1b!2sUniversity%20of%20%C3%89vora!5e0!3m2!1sen!2spt!4v1634073082265!5m2!1sen!2spt"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      class="googleMaps"
    ></iframe>
  </div>
</template>

<script>
import { getImgURL } from "@/functions/globals.js";
export default {
  name: "Rececao",
  data() {
    return {
      showingCartaz: false,
      showingDiarios: false,
      showingGeral: false,
      activated2: false,
      activated3: false,
    };
  },
  components: {},
  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss" scoped>
.rececao {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 75px;

  .titulo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;

    i {
      font-size: 50px;
      margin-right: 20px;
    }
  }

  .intro {
    text-indent: 30px;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 20px;
  }

  .cartaz {
    display: flex;

    img {
      margin-right: 30px;
      width: 450px;
      height: 250px;
      margin-bottom: 50px;
    }

    h1 {
      font-size: 25px;
    }

    ul li {
      display: flex;
      flex-direction: column;
      align-items: center;

      cursor: pointer;
      border-bottom: 1px solid #bebebe;

      .text {
        width: 100%;
        padding: 30px 0px;
        display: flex;
        align-items: center;
      }

      i {
        margin-right: 10px;
        transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      img {
        position: relative;
        height: auto;
      }

      .activated {
        i {
          transform: rotateZ(90deg);
        }
      }
    }
  }

  .googleMaps {
    width: 100%;
    height: 300px;
  }
}

@media (max-width: 900px) {
  .rececao {
    padding: 100px 20px;

    .cartaz {
      flex-direction: column;

      img {
        margin-right: 0;
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
