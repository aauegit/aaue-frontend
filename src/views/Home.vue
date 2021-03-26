<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <div class="heroContent">
        <div class="textArea">
          <h1 class="slogan">De estudantes, <br>para estudantes</h1>
          <p class="heroText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum officiis deleniti dolores accusantium sed doloremque aperiam ipsum, quas veritatis perspiciatis quam tempore odit praesentium tempora rerum animi quis nobis.. Quos, veniam! Fazemos cenas, faz-te socio</p>
          <div class="buttons">
            <button class="vantagens">Descobre as vantagens</button>
            <button class="socio">Faz-te Sócio!</button>
          </div>
        </div>
        <img class="heroImage" src="@/assets/students.svg" alt="">
      </div>
    </section>
    <section class="ourWork">
      <div class="ativismo">
        <img src="@/assets/activism.jpeg" alt="">
        <div class="text">
          <h1>we do stuff</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quis officiis praesentium iure quisquam recusandae inventore fuga quia sapiente libero?</p>
        </div>
      </div>
    </section>
    <section class="recrutamento">
      <div class="aboutUs">
        <div class="text">
          <h1>Mas quem é a AAUE?</h1>
          <p>Somos estudantes, tal como tu, que  trabalham, lutam e dão a cara. A AAUE é quem tenta encontrar a melhor solução para a maioria dos estudantes</p>
          <p>Ao nível interno a AAUÉ tem assento no Senado Universitário, no Conselho de Acção Social, no Conselho de Avaliação, no Conselho Consultivo do Fundo de Acção Social da UÉ, no Gabinete para a Promoção do Sucesso Académico, no Conselho Desportivo da UÉ, no Conselho da Fundação Luís de Molina e na Assembleia de Representantes.</p>
          <p>Ao nível externo a AAUÉ desempenha um papel político junto das outras associações congéneres, no Ministério da Educação e Ciência e está representada em órgãos estatais e regionais. Faz ainda parte do Fórum Académico para a Informação e Representação Externa (FAIRe) e na Federação Académica do Desporto Universitário (FADU), na qual é membro fundador.</p>
          <p>A AAUÉ faz ainda parte do Conselho Municipal de Juventude, do Conselho Consultivo Regional do IPDJ e do Conselho Municipal de Educação.</p>
          <p>Para além do trabalho político a AAUÉ promove actividades culturais e desportivas e presta aos seus membros, os estudantes, serviços variados, desde o lazer e a informação à formação extra-curricular.</p>
        </div>
       <img src="@/assets/activism.jpeg" alt="">
      </div>
    </section>
    <section class="plataformas">
      <h1>Plataformas</h1>
      <p>De forma a ajudar os estudantes da Universidade de Évora, a AAUE disponibiliza as seguintes plataformas de interesse dos estudantes que podem ser acedidas através das ligações:</p>
      <div class="plataformaCards"  >
        <PlataformaCard  link="https://alojamento.aaue.pt/" icon="fas fa-home" titulo="Portal do Alojamento" text="De forma a ajudar os estudantes da Universidade de Évora, a AAUE disponibiliza as seguintes plataformas de interesse dos estudantes que podem ser acedidas através das ligações:" />
        <PlataformaCard link="https://alojamento.aaue.pt/" icon="fas fa-futbol" titulo="Torneio do Reitor" text="De forma a ajudar os estudantes da Universidade de Évora, a AAUE disponibiliza as seguintes plataformas de interesse dos estudantes que podem ser acedidas através das ligações:" />
      </div>
    </section>
    <section class="noticias">
      <div class="noticiasPreview">
        <h1>Notícias</h1>
        <h2>Últimas noticias da Associação Académica da Universidade de Évora. </h2>
        <div class="carrossel" @mousedown="mouseDown()"  @mouseup="mouseUp()" @mouseleave="mouseLeave()" @mousemove="mouseMove()">
          <NoticiaCard v-for="noticia in noticias" :key="noticia.id" :imgURL="getImgURL(noticia.imgURL)" :titulo="noticia.titulo" :data="noticia.dataDePublicacao" :textPreview="noticia.textPreview"/>
        </div>
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
import NoticiaCard from '../components/NoticiaCard.vue';
import PlataformaCard from '../components/PlataformaCard.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      mouseIsDown: false,
      carouselStartX: undefined,
      carouselScrollLeft: undefined,
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
      ],
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    NoticiaCard,
    PlataformaCard,
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
    scrollToElement(destination: string) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    getImgURL(image: String) {
        return require('../assets/' + image);
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
    mouseDown() {
      this.mouseIsDown = true;
    },
    mouseLeave() {
      this.mouseIsDown = false;
    },
    mouseUp() {
      this.mouseIsDown = false;
    },
 
    mouseMove() { 
     
      if(!this.mouseIsDown) {
        return;
      }
    },
  },
});
</script>

<style lang="scss" scoped>

$buttonColorTest: #e96656;
$buttonColor: #d90504;

$AaueRed: #d90504;
$AaueYellow: #f8d80c;

section {
  padding: 20px;
}

.heroContent {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .textArea {
    display: flex;
    width: 50%;
    justify-content: left;
    align-items: left;
    flex-direction: column;

    .slogan {
      font-size: 3.7vw;
      margin: 10px 25px;
      line-height: 70px;
      text-transform: uppercase;
    }
    
    .heroText {
      margin: 0px 25px;
    }

    button {
      max-width: 300px;
      position: relative;
      display: inline-block;

      text-align: center;
      text-transform: uppercase; 

      padding: 15px;
      margin: 30px 25px;

      font-size: 100% + 10%;
      font-weight: 600;
      border: none;

      color: white;
      background-color: $buttonColorTest;

      transition: 0.5s;

      &::before {
        position: absolute;
        content:"";
        border-top: 5px solid lighten($buttonColorTest, 5%);
        border-left: 5px solid lighten($buttonColorTest, 5%);	
        border-right: 5px solid darken($buttonColorTest, 5%);
        border-bottom: 5px solid darken($buttonColorTest, 5%);

        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;	

        transition: 0.5s;
      }

      &:hover {
        box-shadow: 7px 7px darken($buttonColorTest, 10%), -7px -7px lighten($buttonColorTest, 10%);
        cursor: pointer;

          &::before {
          border: 0px;
        }
      }
    }
    .socio:hover {
      box-shadow: -7px 7px darken($buttonColorTest, 10%), 7px -7px lighten($buttonColorTest, 10%);
      cursor: pointer;
    }
  }

  .heroImage {
    width: 600px;
  }
}

.ourWork {
  padding: 20px;
  height: 100vh;

  .ativismo {
    display: flex;

    img {
      margin-right: 30px;
      width: 50%
    
    }
    .text {
      display: flex;
      flex-direction: column;

      h1 {
        text-transform: uppercase;
      }
    }
  }
}

.recrutamento {
  padding: 20px;
  height: 100vh;

  .aboutUs {
    display: flex;

    img {
      margin-left: 30px;
      width: 50%
    
    }
    .text {
      display: flex;
      flex-direction: column;

      h1 {
        text-transform: uppercase;
      }
    }
  }
}

.plataformas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
  }

  .plataformaCards {
    display: flex;
  }

}

.noticias {

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
      justify-content: center;
      flex-wrap: wrap;
    }
  }

}


</style>
