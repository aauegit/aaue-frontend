<template>
  <ScrollToTopButton v-if="!isAtTop" @click="scrollToElement('body')" />
  <NavbarMobile
    v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)"
    @click="activatedNavbar = !activatedNavbar"
  />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <div class="setores">
      <ul class="indice">
        <!-- <i class="fa fa-arrow-circle-down" aria-hidden="true"><span>SETORES</span></i> -->
        <div>
          <h1>Secção Autónoma da Comunicação</h1>
          <li v-for="setor in SAComunicacao" :key="setor.id">
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
          <h1>Secção Autónoma Desportiva</h1>
          <li v-for="setor in SADesportiva" :key="setor.id">
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
      ></Setor>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
import Footer from "@/components/Footer.vue";
import Setor from "@/components/Setor.vue";
import autonomas from "@/static/autonomas.json";
import sadesportiva from "@/static/sadesportiva.json";

export default {
  name: "Setores",
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      SAComunicacao: autonomas,
      SADesportiva: sadesportiva,
      nomeDoSetor: "",
      coordenador1: "",
      coordenador1Img: "",
      fb1: "",
      coordenador2: "",
      coordenador2Img: "",
      fb2: "",
      coordenador4: "",
      coordenador4Img: "",
      fb4: "",
      descricao: "",
      contacto: "",
      coordenador3: "",
      coordenador3Img: "",
      fb3: "",
    };
  },

  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    Setor,
    Footer,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeMount() {
    this.nomeDoSetor = this.SAComunicacao[0].nome;
    this.coordenador1 = this.SAComunicacao[0].coordenador1;
    this.coordenador1Img = this.getImgURL(this.SAComunicacao[0].img1);
    this.fb1 = this.SAComunicacao[0].fb1;
    this.coordenador2 = this.SAComunicacao[0].coordenador2;
    this.coordenador2Img = this.getImgURL(this.SAComunicacao[0].img2);
    this.fb2 = this.SAComunicacao[0].fb2;
    this.coordenador3 = "Inês Marcos";
    this.coordenador3Img = this.getImgURL(
      "SAComunicacao/aauetv/inesmarcos.webp"
    );
    this.fb3 = "https://www.facebook.com/ines.marcos.18";
    this.coordenador4 = "";
    this.coordenador4Img = "";
    this.fb4 = "";
    this.descricao = this.SAComunicacao[0].descricao;
    this.contacto = this.SAComunicacao[0].contacto;
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getImgURL(image) {
      return require("@/assets/membros/" + image).default;
    },
    scrollToElement(destination) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll() {
      window.pageYOffset >= 250
        ? (this.isAtTop = false)
        : (this.isAtTop = true);
    },
    handleResize() {
      this.mobileMode = window.innerWidth <= 1015;

      if (!this.mobileMode) {
        this.activatedNavbar = false;
      }
    },
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
