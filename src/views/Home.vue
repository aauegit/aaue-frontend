<template>
  <section class="hero">
    <div class="heroContent">
      <div class="textArea">
        <h1 class="slogan">
          <span>De estudantes,<br />para estudantes</span>
        </h1>
        <p class="heroText">
          <span
            >A Associação Académica da Universidade de Évora é responsável por
            potenciar o teu envolvimento e desenvolvimento académicos. Podes
            contar com a AAUE para o teu desenvolvimento pessoal e profissional,
            contando com eventos culturais, desportivos, lúdicos, cívicos,
            sociais, pedagógicos e muitos outros.</span
          >
        </p>
        <div class="buttons">
          <button class="vantagens" v-if="isProtocolosFinished">
            <router-link :to="{ name: 'Protocolos' }"
              >Descobre as vantagens</router-link
            >
          </button>
          <button class="socio">
            <router-link :to="{ name: 'Contactos' }">Faz-te Sócio!</router-link>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="ourWork">
    <div class="work">
      <div class="text">
        <h1>O que fazemos?</h1>
        <p>
          A AAUE está organizada em vários Órgãos, Secções e Setores, cada um
          com a sua área de intervenção e competências bem definidas.<br />
          Fica a conhecer o nosso trabalho aqui!
        </p>
        <div class="team">
          <EquipaCard
            @click="snapToElement('body')"
            v-for="membros in equipa"
            :key="membros.id"
            :destination="membros.destination"
            :icon="membros.icon"
            :name="membros.nome"
            :iconColor="membros.iconColor"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="quemSomos">
    <div class="aboutUs">
      <div class="text">
        <h1>O que é a AAUE?</h1>
        <p>
          A Associação Académica da Universidade de Évora é uma organização sem
          fins lucrativos, não governamental e de carácter estudantil,
          pautando-se pelos princípios gerais básicos do movimento associativo:
          Democraticidade, Unicidade, Apartidarismo e Arreligiosidade.
        </p>
        <p>
          Atualmente, a Associação Académica da Universidade de Évora
          encontra-se organizada em diversos grupos, passando a sua
          operacionalização pela Direção e Secções Autónomas, sendo que a
          Direção é constituído por Setores/Secções, diversificados e focados em
          áreas específicas de operacionalização e ação.
        </p>
        <div class="aboutButton">
          <router-link
            class="descobreMais"
            :to="{ name: 'Sobre' }"
            @click="snapToElement('body')"
            >Descobre mais <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <img src="@/assets/aaue.png" alt="" />
    </div>
  </section>
  <section class="plataformas">
    <HeaderTitle
      title="Plataformas"
      subtitle="De forma a ajudar os estudante da Universidade de Évora,"
      subtitle2="A AAUE disponiliza as seguintes plataformas de interesse:"
      :image="getImgURL('plataformas.jpg')"
    />
    <div class="plataformaCards">
      <PlataformaCard
        link="https://alojamento.aaue.pt/"
        icon="fas fa-home"
        titulo="Portal do Alojamento"
        text="Aqui podes encontrar ofertas de alojamento dedicado a estudantes."
      />
      <PlataformaCard
        class="reitorCard"
        link="http://torneioreitor.aaue.pt/"
        icon="fas fa-futbol"
        titulo="Torneio do Reitor"
        text="A AAUE é responsável pelo desporto, dinamizando atividades como torneios internos, ou potenciando a prática federada, através das competições da Federação Académica do Desporto Universitário."
      />
      <PlataformaCard
        link="https://expoestudante.aaue.pt/"
        titulo="Expo Estudante"
        text="Queres participar num evento de futuro, programado a pensar apenas em ti e no teu sucesso? Descobre tudo!"
      >
        <img class="expoIconPlataforma" src="@/assets/expo1.svg" alt="" />
      </PlataformaCard>
    </div>
  </section>
  <section class="noticias">
    <HeaderTitle
      title="Notícias"
      subtitle="As últimas notícias da Associação Académica da Universidade de Évora"
      :image="getImgURL('noticias.jpg')"
    />
    <div class="noticiasPreview">
      <div class="carrossel">
        <div class="newsCards">
          <NoticiaCard
            v-for="(noticia, index) in noticias.slice(initialIndex, finalIndex)"
            :key="noticia._id"
            :data-index="index"
            :postID="noticia._id"
            :categoryColor="noticia.categoryColor"
            :imgURL="getImgURL(`noticias/${noticia.imageLink}`)"
            :titulo="noticia.title"
            :data="noticia.date"
            :textPreview="noticia.paragraphs[0]"
            @click="setNoticia(noticia)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NoticiaCard from "../components/NoticiaCard.vue";
import PlataformaCard from "../components/PlataformaCard.vue";
import EquipaCard from "../components/EquipaCard.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import { getImgURL, snapToElement } from "@/functions/globals.js";

export default {
  name: "Home",
  data() {
    return {
      isProcolosFinished: false,
      initialIndex: 0,
      finalIndex: 3,
      equipa: [
        {
          id: 0,
          destination: "Presidencia",
          icon: "fas fa-globe",
          iconColor: "#F8D01C",
          nome: "Presidência",
        },
        {
          id: 1,
          destination: "Assembleia",
          icon: "fas fa-balance-scale",
          iconColor: "#BAC0CB",
          nome: "Assembleia Magna",
        },
        {
          id: 2,
          destination: "Fiscal",
          icon: "fas fa-wallet",
          iconColor: "#99F683",
          nome: "Conselho Fiscal",
        },
        {
          id: 3,
          destination: "Setores",
          icon: "fas fa-network-wired",
          iconColor: "#FF7733",
          nome: "Setores",
        },
        {
          id: 4,
          destination: "Autonomas",
          icon: "fas fa-money-check-alt",
          iconColor: "#549EFF",
          nome: "Secções Autónomas",
        },
      ],
    };
  },
  components: {
    NoticiaCard,
    PlataformaCard,
    EquipaCard,
    HeaderTitle,
  },
  computed: {
    noticias() {
      return this.$store.getters.getAllNoticias;
    },
  },
  methods: {
    getImgURL,
    snapToElement,
    setNoticia(noticia) {
      this.$store.commit("setCurrentNoticia", noticia);
    },
  },
};
</script>

<style lang="scss" scoped>
$textColor: #f7f8fc;
$easing: ease-in;

@keyframes fadeIn {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

section {
  padding: 100px 75px;
}

.hero {
  background: url("../assets/home.jpg") no-repeat center center;
  padding: 0px 75px;
  min-height: 100vh;
}

.heroContent {
  height: 75vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: $textColor;

  .textArea {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    overflow: hidden;

    .slogan {
      font-size: 70px;
      font-weight: bold;
      margin: 0px 25px 25px 0px;
      text-transform: uppercase;
      overflow: hidden;

      span {
        display: block;
        transform: translate3d(0, -400px, 0);
        animation: fadeIn 1s 0.3s forwards;
      }
    }

    .heroText {
      padding-top: 2px;
      width: 45%;
      font-size: 18px;
      margin: 0;
      overflow: hidden;

      span {
        display: block;
        transform: translate3d(0, -400px, 0);
        animation: fadeIn 1s 0.5s forwards;
      }
    }
  }

  .buttons {
    display: block;
    transform: translate3d(0, 400px, 0);
    animation: fadeIn 1s 0.7s forwards;
  }

  button {
    margin-top: 35px;
    padding: 15px;
    border: 0;
    outline: 0;
    border-radius: 25px;
    box-shadow: rgba(83, 83, 83, 0.35) 0px 5px 10px;
    text-transform: uppercase;
    font-family: "Metropolis", sans-serif;
    font-weight: bold;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:nth-child(2) {
      margin-left: 30px;
    }

    &:hover {
      transform: translateY(-5px);
    }

    a {
      opacity: 1;
    }
  }
}

.ourWork {
  .work {
    display: flex;

    .team {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 125px;
      padding: 0px 0px;
    }
    .text {
      display: flex;
      flex-direction: column;

      h1 {
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 400;
        margin-bottom: 25px;
      }

      p {
        font-size: 18px;
      }
    }
  }
}

.quemSomos {
  display: flex;
  padding-top: 0;

  .aboutUs {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

    img {
      height: 400px;
      margin-left: 150px;
    }
    .text {
      display: flex;
      flex-direction: column;
      width: 50%;

      h1 {
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 400;
        margin-bottom: 25px;
      }

      p {
        font-size: 18px;
        margin: 10px 0px;
      }

      .aboutButton {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }

      a {
        margin-top: 25px;
        width: 220px;
        padding: 15px;
        border: 0;
        outline: 0;
        border-radius: 25px;
        text-align: center;
        box-shadow: rgba(83, 83, 83, 0.35) 0px 5px 10px;
        text-transform: uppercase;
        font-family: "Metropolis", sans-serif;
        font-weight: bold;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

        i {
          margin-right: 5px;
          transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &:hover i {
          transform: translateX(5px);
        }
      }
    }
  }
}

.plataformas {
  padding: 0px 0;

  .plataformaCards {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

.noticias {
  padding: 100px 0 100px 0px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 80px;
  }

  .noticiasPreview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .carrossel {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .newsCards {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        padding: 20px 0;
      }
    }
  }
}

@media (max-width: 1600px) {
  .heroContent .textArea {
    .slogan {
      font-size: 60px;
    }

    .heroText {
      font-size: 16px;
    }
  }
}

@media (max-width: 1450px) {
  .ourWork .work .text h1 {
    font-size: 45px;
  }

  .quemSomos .aboutUs .text h1 {
    font-size: 45px;
  }
}

@media (max-width: 1350px) {
  .noticias .noticiasPreview .carrossel {
    .newsCards {
      flex-wrap: wrap;
    }

    .leftArrow,
    .rightArrow {
      display: none;
    }
  }
}

@media (max-width: 1250px) {
  .plataformas .plataformaCards {
    flex-wrap: wrap;
  }
}

@media (max-width: 1016px) {
  .heroContent {
    height: 100vh;
  }
  .heroContent .textArea .heroText {
    width: 80%;
  }

  .pageContent {
    padding-top: 0vh;
  }

  .quemSomos .aboutUs {
    flex-direction: column;
    padding-bottom: 50px;

    img {
      display: none;
    }

    .text {
      width: 100%;
    }
  }
}

@media (max-width: 900px) {
  .noticias .noticiasPreview .carrossel {
    .newsCards {
      flex-direction: column;
    }
  }
}

@media (max-width: 790px) {
  section,
  .hero {
    padding: 50px;
  }

  .heroContent .textArea .slogan {
    font-size: 50px;
  }

  .plataformas {
    .plataformaCards {
      padding: 25px 0;
    }
  }
}

@media (max-with: 610px) {
  .ourWork .work .team {
    width: 300px;
  }
}
@media (max-width: 500px) {
  section,
  .hero {
    padding: 20px;
  }

  .heroContent .textArea .slogan {
    font-size: 38px;
    margin-right: 0;
  }

  .ourWork .work .text .team {
    margin-top: 20px;
  }
}

@media (max-width: 450px) {
  .heroContent .textArea .heroText {
    width: 100%;
  }
}
@media (max-width: 415px) {
  section,
  .hero {
    padding: 20px;
  }

  .heroContent .textArea {
    .slogan {
      font-size: 38px;
    }

    .heroText {
      font-size: 16px;
    }
  }

  .heroContent .textArea .buttons {
    flex-wrap: wrap;

    button {
      flex: 0 0 50%;

      &:nth-child(2) {
        margin-left: 0px;
      }
    }
  }
}

.fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s $easing;
}

.fade-leave-to {
  opacity: 0;
  transition: all 0.3s $easing;
}

.fadeText-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.fadeText-enter-active {
  transition: all 0.5s $easing;
}

.fadeText-leave-to {
  opacity: 0;
  transition: all 0.5s $easing;
}

.expoIconPlataforma {
  position: absolute;
  top: 0;
  left: 25px;
  width: 70px;
}
</style>
