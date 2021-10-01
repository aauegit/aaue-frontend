<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
      <HeaderTitle title="Notícias" :image="getImgURL('noticias.jpg')"/>
      <section class="noticias">
        <form class="searchMobile" method="get" @submit.prevent v-if="mobileMode">
              <i class="fas fa-search"></i>
              <input class="searchBar" type="search" placeholder="Pesquisar ...">
          </form>
          <div class="newsColumn" >
              <NoticiasCardPreview v-for="noticia in noticias" :key="noticia.id" :imgURL="getImgURL('activism.jpeg')" :titulo="noticia.title" :data="noticia.date" :textPreview="noticia.paragraphs[0]"/>
          </div>
          <div class="sidebar" v-if="!mobileMode">
              <form class="search" method="get" @submit.prevent>
                  <i class="fas fa-search"></i>
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
import NoticiasCardPreview from '../components/NoticiasCardPreview.vue';
import Footer from '../components/Footer.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';

const { getNews } = require('@/functions/getNews');


export default defineComponent({
  name: 'Noticias',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      noticias: [],
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    NoticiasCardPreview,
    Footer,
    HeaderTitle,
  },
  async created() {
    this.noticias = await getNews();
    console.log(this.noticias)
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
        return require('@/assets/' + image).default;
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

.pageContent {
  padding-top: 15vh;
}

.noticias {
    display: flex;
    padding: 75px;
    padding-top: 15vh;
    padding-bottom: 100px;

    .searchMobile {
      position: relative;
      margin-bottom: 20px;

      input {
        width: 90%;
        padding: 15px;
        margin: 0 30px;
        border-radius: 25px;
      }

      i {
        background-color: black;
        color: white;
        padding: 17px 20px 17px 20px;
        border-radius: 0px 25px 25px 0px;
        position: absolute;
        right: 5%;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

      }
    }

    .newsColumn {
        display: flex;
        flex-direction: column;
    }

    .sidebar {
      height: 80vh;
        padding-left: 20px;
        border-left: 1px solid #bebebe57;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 17vh;

        .search {
          position: relative;

          i {
            position: absolute;
            font-size: 20px;
            top: 15%;
            left: 10px;
            opacity: 0.5;

          }
        }

        .searchBar {
            padding: 10px 10px 10px 40px;
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

          list-style-type: disc outside none;
            

            li {
                margin: 20px;

                &::before {
                  content: "\200B";
                }
            }
        }
    }
}

@media (max-width: 1016px) {
  .noticias {
    flex-direction: column;
  }

  .pageContent {
    padding-top: 0vh;
  }
  
}

</style>