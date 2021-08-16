<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
      <div class="presidencia">
         <h1>Mesa da Assembleia Magna</h1>
        <hr>
        <div class="membros">
          <MembroDirecao id="membro" v-for="membro in membros" :key="membro.id" :img="getImgURL(membro.img)" :nome="membro.nome" :cargo="membro.cargo" :fb="membro.fb"/>
        </div>
      </div>
    <Footer />
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import MembroDirecao from '@/components/MembroDirecao.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Presidencia',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      membros: [
        {id: 0, nome: "Miguel Lopes", cargo: "Presidente", fb: "https://www.facebook.com/miguel.lopes.1272", img: "miguelLopes.webp"},
        {id: 1, nome: "Cristiana Tomaz", cargo: "Vice-Presidente", fb: "https://www.facebook.com/cristiana.tomaz.33", img: "cristianaTomaz.webp"},
        {id: 2, nome: "António Lourenço", cargo: "Secretário", fb: "https://www.facebook.com/antonio.lourenco.5283", img: "antonioLourenco.webp"},
        {id: 3, nome: "Gonçalo Passinhas", cargo: "Secretário", fb: "https://www.facebook.com/am.i.a.jerry", img: "goncaloPassinhas.webp"},
        {id: 4, nome: "Joana Amaro", cargo: "Secretária", fb: "https://www.facebook.com/joana.amaro98", img: "joanaAmaro.webp"},
      ]
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    MembroDirecao,
    Footer,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
   methods: {
    getImgURL(image: String) {
        return require('@/assets/membros/magna/' + image).default;
    },
    scrollToElement(destination: string) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    handleScroll () {
      window.pageYOffset >= 250 ? this.isAtTop = false : this.isAtTop = true;
    },
    handleResize () {
      this.mobileMode = window.innerWidth <= 1015;

      if(!this.mobileMode) {
        this.activatedNavbar = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>

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