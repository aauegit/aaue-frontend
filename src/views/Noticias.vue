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
              <NoticiasCardPreview v-for="noticia in noticias" :key="noticia.id" :imgURL="getImgURL(noticia.imgURL)" :titulo="noticia.titulo" :data="noticia.dataDePublicacao" :textPreview="noticia.textPreview"/>
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


export default defineComponent({
  name: 'Noticias',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      noticias: [
          {
            id: 0,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "AAUE condena Secretário de Estado por querer ficar bem na fotografia do Fim das Associações", 
            dataDePublicacao: "3 Março, 2021",
            textPreview: "2020 marcou o início de um período de recessão económica onde as associações foram colocadas na corda bamba da sobrevivência. Agora, o executivo decide iludir estas estruturas, colocando em causa a sua capacidade de ação e os postos de trabalho.",
        },
          {
            id: 1,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "Orçamento de Estado de 2021 – A Propina e a Tese", 
            dataDePublicacao: "3 Março, 2021",
            textPreview: "Ciente da sua missão e posição, a Associação Académica da Universidade de Évora vem clarificar o artigo 259º do Orçamento de Estado (OE). A lei nº. 75-B/2020, de 31 de dezembro de 2020, artigo 259º do OE 2021 refere: Prorrogação do prazo para entrega e apresentação de teses ou dissertações: É prorrogado, até ao final ",
        },
          {
            id: 2,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "Plano de Recuperação e Resiliência", 
            dataDePublicacao: "2 Março, 2021",
            textPreview: "A Universidade de Évora e a Associação Académica da Universidade de Évora uniram-se na reflexão de preocupações, facultando contributos para a consulta pública do Plano de Recuperação e Resiliência. ",
        },
          {
            id: 3,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "Resultado das Eleições para os Órgãos Sociais da AAUE para o mandato de 2021", 
            dataDePublicacao: "18 Dezembro, 2020",
            textPreview: "Caros Estudantes, A Comissão Eleitoral vem por este meio divulgar os resultados bem como a Ata de Eleição dos Órgãos Sociais da Associação Académica da Universidade de Évora para o mandato de 2021: Mesa da Assembleia Magna: Lista F Conselho Fiscal: Lista F Direção e Secções Autónomas: Lista F Saudações Académicas, Ana Lucas Presidente da ",
        },
          {
            id: 4,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "Crónica «Dia-a-dia do Estudante»", 
            dataDePublicacao: "27 Abril, 2019",
            textPreview: "O setor do Apoio aos Núcleos é um dos 18 setores da AAUE e aquele que ao longo do ano tem um contacto mais direto com os vários núcleos de estudantes da nossa academia. Tal como o nome diz, o setor tem como objetivo apoiar todos os núcleos dos vários cursos mas também as tunas ",
        },
          {
            id: 5,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "Debate Propinas", 
            dataDePublicacao: "5 Abril, 2019",
            textPreview: "Decorreu no passado dia 25 de Março (3ªfeira), pelas 18h30 no anfiteatro 131 do Colégio do Espírito Santo, e organizado pelo setor de Política Educativa da AAUE, um debate subordinado ao tema «Propinas: Perspetivas e futuro», que contou com a presença de vários representantes de partidos políticos e juventudes partidárias. Durante cerca de duas horas ",
        },
          {
            id: 6,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "Fases Finais CNU", 
            dataDePublicacao: "5 Abril, 2019",
            textPreview: "Estão verdadeiramente de parabéns o Desporto da Universidade de Évora e os seus atletas! Após os encontros da zona Norte, Centro e Sulas dos CNU (Campeonatos Nacionais Universitários), realizadas desde o início do ano letivo, a AAUE conseguiu apurar 10 equipas (cerca de 130 atletas), entre várias modalidades, constituindo assim um record, para as fases ",
        },
          {
            id: 7,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "De Mãos Dadas", 
            dataDePublicacao: "27 Março, 2019",
            textPreview: "Reconhecendo a importância da relação dos estudantes universitários com a população local e considerando, simultaneamente, as especificidades demográficas da nossa região, surge em março 2019 o Projeto “De Mãos Dadas” desenvolvido pela Associação Académica da Universidade de Évora. Este projeto, assente na prática de voluntariado regular, com ações constantes em dois lares do Centro Social Paroquial ",
        },
          {
            id: 8,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "OFICINA DE ESCRITA CRIATIVA", 
            dataDePublicacao: "25 Março, 2019",
            textPreview: " Sempre tiveste curiosidade em saber como podemos ser criativos e escrever ao mesmo tempo?! A AAUE numa actividade inserida no mês da Juventude 2019, leva a cabo uma «Oficina de Escrita Criativa». Na próxima quarta-feira dia 27 de Março pelas 16h, na sala 115 do Colégio do Espírito Santo, com a Professora de Língua ",
        },
          {
            id: 9,
            category: "any",
            imgURL: "activism.jpeg", 
            titulo: "Crónicas «ENSINO SUPERIOR»", 
            dataDePublicacao: "25 Março, 2019",
            textPreview: "Ser Estudante do Ensino Superior nunca é apenas um fim nessa medida. Ser Estudante é ser, também, um cidadão inserido e que participe ativamente em vários movimentos, associações, grupos culturais e demais entidades da sociedade. O Estudante deve ser um precursor da História, na medida em que as grandes mudanças democráticas tendem a partir de ",
        },
      ]
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