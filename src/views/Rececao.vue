<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
        <div class="rececao">
            <div class="titulo">
                <i class="fas fa-rocket"></i>
                <h1>A melhor receção ao caloiro está de volta!</h1>
            </div>
            <p class="intro"> Por excelência, a <b>Receção ao Caloiro</b> é o ponto alto dos primeiros tempos de um estudante na Universidade de Évora e, em muitos casos, na sua nova cidade. A Receção ao Caloiro destaca-se não só pelo receber por parte da academia dos seus novos membros, mas também por ser mais um momento onde várias gerações académicas se voltam a reunir, recordando tempos e vivências de outrora. Não apenas conhecida pelas noites académicas, de concertos e folia no recinto, a Receção destaca-se também pela envolvência com o município, no plano cultural, mas também social e patrimonial, promovendo assim um primeiro contacto dos novos estudantes da nossa cidade, com a sua «nova casa» para os próximos anos.</p>
            <div class="cartaz">
                <img :src="getImgURL('rececao.jpg')" alt="">
                <ul>
                    <h1>Afinal de contas é aqui que começam os melhores dias da TUA vida!</h1>
                    <li>
                        <i class="fas fa-caret-right"></i>
                        <p>#1 - Cartaz</p>
                    </li>
                    <li>
                        <i class="fas fa-caret-right"></i>
                        <p>#2 - Bilhetes Gerais</p>
                    </li>
                    <li>
                        <i class="fas fa-caret-right"></i>
                        <p>#3 - Bilhetes Diários</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Rececao',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
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
        return require('../assets/' + image);
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
.rececao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0px 5vw;

    .titulo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55%;
        margin-bottom: 30px;

        i {
            font-size: 50px;
            margin-right: 20px;
        }

    }

    .intro {
        text-indent: 30px;
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 20px;
    }

    .cartaz {
        display: flex;

        img {
            margin-right: 30px;
            width: 450px;
        }

        h1 {
            font-size: 25px;
        }

        ul li {
            display: flex;
            align-items: center;
            padding: 30px 0px;
            cursor: pointer;
            border-bottom: 1px solid #bebebe;

            i {
                margin-right: 10px;
            }
        }
    }
}
</style>