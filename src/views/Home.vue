<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <div v-if="!activatedNavbar" class="pageContent">
    <section class="hero">
      <div class="heroContent">
        <div class="textArea">
          <h1 class="slogan">De estudantes para estudantes</h1>
          <h2 class="heroText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veniam! Fazemos cenas, faz-te socio</h2>
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
          <h1>ativismo estudantil</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quis officiis praesentium iure quisquam recusandae inventore fuga quia sapiente libero?</p>
        </div>
      </div>
    </section>
    <section class="recrutamento">
      somos estudantes , tal como tu, que .....
    </section>
    <section class="plataformas">
      <p>ya plataformas</p>
    </section>
    <section class="noticias">
      <h1>ya noticias e ques</h1>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import NavbarMobile from '../components/NavbarMobile.vue';
import ScrollToTopButton from '../components/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Home',
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

$buttonColorTest: #e96656;
$buttonColor: #d90504;

$AaueRed: #d90504;
$AaueYellow: #f8d80c;


.heroContent {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid red;

  .textArea {
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;

    .slogan {
      margin: 0px 25px;
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
      background-color: $buttonColor;

      transition: 0.5s;

      &::before {
        position: absolute;
        content:"";
        border-top: 5px solid lighten($buttonColor, 5%);
        border-left: 5px solid lighten($buttonColor, 5%);	
        border-right: 5px solid darken($buttonColor, 5%);
        border-bottom: 5px solid darken($buttonColor, 5%);

        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;	

        transition: 0.5s;
      }

      &:hover {
        box-shadow: 7px 7px darken($buttonColor, 10%), -7px -7px lighten($buttonColor, 10%);
        cursor: pointer;

          &::before {
          border: 0px;
        }
      }
    }
    .socio:hover {
      box-shadow: -7px 7px darken($buttonColor, 10%), 7px -7px lighten($buttonColor, 10%);
      cursor: pointer;
    }
  }

  .heroImage {
    width: 600px;
  }
}

</style>
