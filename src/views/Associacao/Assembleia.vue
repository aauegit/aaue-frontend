<template>
  <div v-if="!activatedNavbar" class="pageContent">
    <div class="presidencia">
      <h1>Mesa da Assembleia Magna</h1>
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
  </div>
</template>

<script>
import MembroDirecao from "@/components/MembroDirecao.vue";
import assembleiaMagna from "@/static/assembleiaMagna.json";

export default {
  name: "Presidencia",
  data() {
    return {
      membros: assembleiaMagna,
    };
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    MembroDirecao,
    Footer,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getImgURL(image) {
      return require("@/assets/membros/magna/" + image).default;
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
.pageContent {
  padding-top: 15vh;
}

.presidencia {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 150px;

  h1,
  hr {
    margin-left: 100px;
  }
}

.membros {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 150px;

  #membro {
    flex: 0 0 20%;
  }
}
</style>
