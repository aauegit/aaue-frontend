<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
        <div class="eventos">
            <router-link class="routerRececao" to="/" :style="{ 'background-image': 'url(' + imageRececao + ')' }" @mouseover="showRececao()" @mouseleave="revertRececao()"> 
                <div class="rececao">
                    <h1>Receção ao Caloiro</h1>
                    <p>Por excelência, a Receção ao Caloiro é o ponto alto dos primeiros tempos de um estudante na Universidade de Évora e, em muitos casos, na sua nova cidade.</p>
                </div>
            </router-link>
             <router-link class="routerQueima" to="/" :style="{ 'background-image': 'url(' + imageQueima + ')' }" @mouseover="showQueima()" @mouseleave="revertQueima()"> 
                <div class="queima">
                    <h1>Queima das Fitas</h1>
                    <p>O culminar desta experiência acontece no dia Solene da Queima das Fitas, momento em que, mais do que a solenidade da hora da despedida, se celebra um ciclo cumprido!</p>
                </div>
            </router-link>
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
  name: 'Eventos',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      imageQueima: 'https://cdn1.newsplex.pt/media/2019/5/6/691455.png?type=artigo',
      imageRececao: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
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
    showQueima() {
        this.imageQueima = 'https://media4.giphy.com/media/l2JdXy8xasypvE0Ni/giphy.gif?cid=ecf05e47u2nzl0oi8lmavma01246xa7suthry4zyzsyuudq8&rid=giphy.gif';
    },
    revertQueima() {
        this.imageQueima = 'https://cdn1.newsplex.pt/media/2019/5/6/691455.png?type=artigo';
    },
    showRececao() {
        this.imageRececao = 'https://media4.giphy.com/media/3o7aTxE7xDbTJ8ei08/giphy.gif?cid=ecf05e47vu8jw8q23y3kib2sfno85ys9ek8zhds2upsukdr1&rid=giphy.gif';
    },
    revertRececao() {
        this.imageRececao = 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
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

.eventos {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .routerRececao {
        opacity: 1;
        height: 85vh;
        margin-top: 15vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-size: cover;
        color: white;

        .rececaoImg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            background-color: #fff;
            z-index: -1;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #414a4f;
                opacity: 0.75;
            }
        }

        .rececao {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    }

    .routerQueima {
        opacity: 1;
        height: 85vh;
        margin-top: 15vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-size: cover;
        color: white;

        .queima {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    }

    h1 {
        margin-bottom: 20px;
    }

    p {
        padding: 0px 5vw;
    }
}
</style>