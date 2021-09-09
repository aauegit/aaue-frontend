<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <div class="heroContent">
        <div class="textArea">
          <transition name="fade" type="transition" mode="out-in" appear>
            <h1 class="slogan">De estudantes,<br>para estudantes</h1>
          </transition>
          <transition name="fadeText" type="transition" mode="out-in" appear>
            <p class="heroText"> A Associação Académica da Universidade de Évora é responsável por potenciar o teu envolvimento e desenvolvimento académicos. Podes contar com a AAUE para o teu desenvolvimento pessoal e profissional, contando com eventos culturais, desportivos, lúdicos, cívicos, sociais, pedagógicos e muitos outros.</p>
          </transition>
          <div class="buttons">
            <button class="vantagens"><router-link :to="{name: 'Protocolos' }">Descobre as vantagens</router-link></button>
            <button class="socio"><router-link :to="{name: 'Contactos' }">Faz-te Sócio!</router-link></button>
          </div>
        </div>
      </div>
    </section>
    <section class="ourWork">
      <div class="work">
        <img src="@/assets/activism.jpeg" alt="">
        <div class="text">
          <h1>O que fazemos?</h1>
          <p>A AAUE está organizada em vários Órgãos, Secções e Setores, cada um com a sua área de intervenção e competências bem definidas. Fica a conhecer o nosso trabalho aqui!</p>
          <div class="team" >
            <EquipaCard @click="snapToElement('body')" v-for="membros in equipa" :key="membros.id" :destination="membros.destination" :icon="membros.icon" :name="membros.nome"/>
          </div>
        </div>
      </div>
    </section>
    <section class="recrutamento">
      <div class="aboutUs">
        <div class="text">
          <h1>O que é a AAUE?</h1>
          <p> A Associação Académica da Universidade de Évora é uma entidade responsável pela representação estudantil dos estudantes da Universidade de Évora a nível local e nacional. A AAUE faz parte de várias estruturas nacionais, aumentando a sua capacidade de ação e resposta, e tem ainda assentos em alguns Órgãos da Universidade de Évora, Conselhos Municipais e contribui de forma ativa para o rumo do Ensino Superior em Portugal.</p>
          <p>Para além do trabalho político a AAUÉ promove actividades culturais e desportivas e presta aos seus membros, os estudantes, serviços variados, desde o lazer e a informação à formação extra-curricular.</p>
        </div>
       <img src="@/assets/activism.jpeg" alt="">
      </div>
    </section>
    <section class="plataformas">
      
      <HeaderTitle
        title="Plataformas"
        subtitle="De forma a ajudar os estudante da Universidade de Évora,"
        subtitle2="A AAUE disponiliza as seguintes plataformas de interesse:"
        :image="getImgURL('plataformas.jpg')"/>
      <div class="plataformaCards"  >
        <PlataformaCard  link="https://alojamento.aaue.pt/" icon="fas fa-home" titulo="Portal do Alojamento" text="Aqui podes encontrar ofertas de alojamento dedicado a estudantes." />
        <PlataformaCard link="http://torneioreitor.aaue.pt/" icon="fas fa-futbol" titulo="Torneio do Reitor" text="A AAUE é responsável pelo desporto, dinamizando atividades como torneios internos, ou potenciando a prática federada, através das competições da Federação Académica do Desporto Universitário." />
        <PlataformaCard link="http://expoestudante.aaue.pt/" icon="fas fa-futbol" titulo="Expo Estudante" text="Queres participar num evento de futuro, programado a pensar apenas em ti e no teu sucesso? Descobre tudo!" />
      </div>
    </section>
    <section class="noticias">
      <HeaderTitle
        title="Notícias"
        subtitle="As últimas notícias da Associação Académica da Universidade de Évora"
        :image="getImgURL('noticias.jpg')"/>
      <div class="noticiasPreview">
        <div class="carrossel">
          <a class="leftArrow"><i class="fas fa-chevron-left"></i></a>
          <div class="newsCards">
            <NoticiaCard :key="noticias[noticiaIndex].id" :imgURL="getImgURL(noticias[noticiaIndex].imgURL)" :titulo="noticias[noticiaIndex].titulo" :data="noticias[noticiaIndex].dataDePublicacao" :textPreview="noticias[noticiaIndex].textPreview"/>
            <NoticiaCard :key="noticias[noticiaIndex + 1].id" :imgURL="getImgURL(noticias[noticiaIndex + 1].imgURL)" :titulo="noticias[noticiaIndex + 1].titulo" :data="noticias[noticiaIndex + 1].dataDePublicacao" :textPreview="noticias[noticiaIndex + 1].textPreview"/>
            <NoticiaCard :key="noticias[noticiaIndex + 2].id" :imgURL="getImgURL(noticias[noticiaIndex + 2].imgURL)" :titulo="noticias[noticiaIndex + 2].titulo" :data="noticias[noticiaIndex + 2].dataDePublicacao" :textPreview="noticias[noticiaIndex + 2].textPreview"/>
          </div>
          <a class="rightArrow"><i class="fas fa-chevron-right"></i></a>
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
import EquipaCard from '../components/EquipaCard.vue';
import Footer from '../components/Footer.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      mouseIsDown: false,
      equipa: [
        {id: 0, destination: "Presidencia", icon: "fas fa-globe", nome: "Presidência", },
        {id: 1, destination: "Assembleia", icon: "fas fa-balance-scale", nome: "Assembleia Magna", },
        {id: 2, destination: "Fiscal", icon: "fas fa-wallet", nome: "Conselho Fiscal", },
        {id: 3, destination: "Setores", icon: "fas fa-network-wired", nome: "Setores", },
        {id: 4, destination: "Autonomas", icon: "fas fa-money-check-alt", nome: "Secções Autónomas", },
      ],
      noticiaIndex: 0,
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
    EquipaCard,
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
    scrollToElement(destination: string) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    snapToElement(destination: string) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView(true);
      }
    },
    getImgURL(image: String) {
        return require('../assets/' + image).default;
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

$textColor: #f7f8fc;
$easing: ease-in;

section {
  padding: 100px 75px;
}

.hero {
  background: url('@/assets/home.jpg') no-repeat center center;
  padding: 0px 75px;
  height: 85vh;
}

.heroContent {
  height: 85vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: $textColor;

  .textArea {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    overflow: none;

    .slogan {
      font-size: 70px;
      font-weight: 500;
      margin: 0px 25px 25px 0px;
      text-transform: uppercase;
      overflow: none;
    }
    
    .heroText {
      width: 60%;
      font-size: 18px;
      margin: 0;
    }
  }

  button {
    margin-top: 35px;
    padding: 15px;
    border: 0;
    outline: 0;
    border-radius: 25px;
    box-shadow: rgba(83, 83, 83, 0.35) 0px 5px 10px;
    text-transform: uppercase;
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
  height: 100vh;

  .work {
    display: flex;

    .team {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 125px;
    }

    img {
      margin-right: 30px;
      width: 50%
    
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

.recrutamento {
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

.plataformas {
  padding: 75px 0;

  .plataformaCards {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }

}

.noticias {
  padding: 100px 0 100px 0px;

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
      }

      .leftArrow,
      .rightArrow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #000000;

        i {
          font-size: 30px;
          color: #ffffff;
          transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      }

      .leftArrow:hover i{
        transform: translateX(-3px);
      }

      .rightArrow:hover i{
        transform: translateX(3px);
      }
    }
  }

}

@media all and (min-width: 1024px) and (max-width: 1280px) { 

}
 
@media all and (min-width: 768px) and (max-width: 1024px) { 

}
 
@media all and (min-width: 480px) and (max-width: 768px) { 

}
 
@media all and (max-width: 480px) { 
  
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


</style>
