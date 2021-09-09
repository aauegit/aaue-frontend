<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
      <HeaderTitle title="Discursos" :image="getImgURL('discursos.jpg')"/>
      <section class="discurso">
          <div class="newsColumn" >
              <DiscursoCardPreview v-for="discurso in discursos" :key="discurso.id" :imgURL="getImgURL(discurso.imgURL)" :titulo="discurso.titulo" :data="discurso.dataDePublicacao" :textPreview="discurso.textPreview"/>
          </div>
          <div class="sidebar">
              <form role="search" method="get">
                  <input class="searchBar" type="search" placeholder="Pesquisar ...">
              </form>
              <h1>Artigos recentes</h1>
              <hr>
              <ul class="artigos">
                  <li><router-link to="/">Artigo1</router-link></li>
                  <li><router-link to="/">Artigo2</router-link></li>
                  <li><router-link to="/">Artigo3</router-link></li>
                  <li><router-link to="/">Artigo4</router-link></li>
                  <li><router-link to="/">Artigo5</router-link></li>
              </ul>
              <h1>Categorias</h1>
              <hr>
              <ul class="categorias">
                  <li><router-link to="/">Comunicados</router-link></li>
                  <li><router-link to="/">Desporto</router-link></li>
                  <li><router-link to="/">Discursos</router-link></li>
                  <li><router-link to="/">Ensino</router-link></li>
                  <li><router-link to="/">Geral</router-link></li>
                  <li><router-link to="/">Política</router-link></li>
              </ul>
          </div>
      </section>
      <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import DiscursoCardPreview from '../components/DiscursoCardPreview.vue';
import Footer from '../components/Footer.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';

export default defineComponent({
  name: 'Discursos',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      discursos: [
          {
            id: 0,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso da Assinatura do Contrato", 
            dataDePublicacao: "27 Janeiro, 2019",
        },
          {
            id: 1,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso da tomada de posse mandato 2019", 
            dataDePublicacao: "27 Janeiro, 2019",
        },
          {
            id: 2,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso 1 de Novembro", 
            dataDePublicacao: "5 Dezembro, 2018",
        },
          {
            id: 3,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso UBIKE", 
            dataDePublicacao: "5 Dezembro, 2018",
        },
          {
            id: 4,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso da tomada de posse da Reitora", 
            dataDePublicacao: "5 Dezembro, 2018",
        },
          {
            id: 5,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso de tomada de posse (1 Janeiro 2018)", 
            dataDePublicacao: "5 Dezembro, 2018",
        },
          {
            id: 6,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso da sessão de encerramento da semana ECS", 
            dataDePublicacao: "5 Dezembro, 2018",
        },
          {
            id: 7,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso Mecenas", 
            dataDePublicacao: "5 Dezembro, 2018",
            textPreview: "",
        },
          {
            id: 8,
            category: "any",
            imgURL: "aaue40anos.jpg", 
            titulo: "Discurso de boas vindas", 
            dataDePublicacao: "5 Dezembro, 2018",
            textPreview: "",
        },
      ]
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    DiscursoCardPreview,
    Footer,
    HeaderTitle,
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
        return require('../assets/' + image).default;
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

<style lang="scss">

.discurso {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 100px;

    .newsColumn {
        display: flex;
        flex-direction: column;
    }

    .sidebar {
        height: 80vh;
        padding-left: 20px;
        border-left: 1px solid #bebebe57;

        .searchBar {
            padding: 10px;
            margin-bottom: 30px;
        }

        hr {
            width: 100px;
            background: red;
            border: 1px solid red;
            margin: 5px 0px;
        }

        .artigos,
        .categorias{ 
            

            li {
                margin: 20px;
            }
           
        }
    }
}

</style>