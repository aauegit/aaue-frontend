<template>
  <div v-if="!activatedNavbar" class="pageContent">
    <div class="setores">
      <ul class="indice">
        <div>
          <li v-for="setor in setores" :key="setor.id">
            <a
              @click="
                (nomeDoSetor = setor.nome) &&
                  (descricao = setor.descricao) &&
                  (contacto = setor.contacto) &&
                  (coordenador1 = setor.coordenador1) &&
                  (coordenador1Img = getImgURL(setor.img1)) &&
                  (fb1 = setor.fb1) &&
                  (coordenador2 = setor.coordenador2) &&
                  (coordenador2Img = getImgURL(setor.img2)) &&
                  (fb2 = setor.fb2) &&
                  (coordenador3 = setor.coordenador3) &&
                  (coordenador3Img = getImgURL(setor.img3)) &&
                  (fb3 = setor.fb3) &&
                  (coordenador4 = setor.coordenador4) &&
                  (coordenador4Img = getImgURL(setor.img4)) &&
                  (fb4 = setor.fb4)
              "
            >
              <i :class="setor.icon"></i>
              <p>{{ setor.nome }}</p>
            </a>
          </li>
        </div>
      </ul>
      <Setor
        v-if="nomeDoSetor"
        :nomeDoSetor="nomeDoSetor"
        :coordenador1="coordenador1"
        :coordenador1Img="coordenador1Img"
        :fb1="fb1"
        :coordenador2="coordenador2"
        :coordenador2Img="coordenador2Img"
        :fb2="fb2"
        :coordenador3="coordenador3"
        :coordenador3Img="coordenador3Img"
        :fb3="fb3"
        :coordenador4="coordenador4"
        :coordenador4Img="coordenador4Img"
        :fb4="fb4"
        :descricao="descricao"
        :contacto="contacto"
      />
    </div>
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
      nomeDoSetor: "Informática",
      coordenador1: "Francisco Rodrigues",
      coordenador1Img: this.getImgURL(
        "membros/setores/informatica/franciscorodrigues.webp"
      ),
      fb1: "https://www.facebook.com/francisco.rodrigues.94651",
      coordenador2: "Ion Chirica",
      coordenador2Img: this.getImgURL(
        "membros/setores/informatica/ionchirica.webp"
      ),
      fb2: "https://www.facebook.com/officialdayumdrops",
      coordenador3: "Tiago Costa",
      coordenador3Img: this.getImgURL(
        "membros/setores/informatica/tiagocosta.webp"
      ),
      fb3: "https://www.facebook.com/tiagoagcosta/",
      coordenador4: "",
      coordenador4Img: "",
      fb4: "",
      descricao:
        "O Setor de Informática tem como objetivo o bom funcionamento na gestão de informação e no domínio do conteúdo em formato digital, de forma a facilitar as tarefas dos recursos humanos, proporcionando-se assim formas de trabalho mais eficientes. Cabe ao setor o papel de administração e manutenção do website da AAUE, que pode ser visitado por todos os utilizadores que pretendam tirar proveito dos serviços do mesmo, facilitando o acesso a toda a informação disponibilizada.",
      contacto: "informativa@aaue.pt",
    };
  },
  created() {},
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
</style>
