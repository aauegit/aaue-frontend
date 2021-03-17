<template>
  <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
  <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
  <Navbar v-if="!mobileMode" class="navbar" />
  <section class="hero">
    <div class="container">
      <div class="textArea">
        <h1>De estudantes para estudantes</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veniam! Fazemos cenas, faz-te socio</h2>
        <button>Descobre as vantagens</button>
      </div>
      <img src="@/assets/students.svg" alt="">
    </div>
  </section>
  <section class="ourWork">
    <div class="container">
      <img src="@/assets/activism.jpeg" alt="">
      <div class="text">
        <h1>ativismo estudantil</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quis officiis praesentium iure quisquam recusandae inventore fuga quia sapiente libero?</p>
      </div>
    </div>
  </section>
  <section class="plataformas">
    <p>ya plataformas</p>
  </section>
  <section class="noticias">
    <h1>ya noticias e ques</h1>
  </section>
  <Footer />
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
    },
  },
});
</script>

<style lang="scss" scoped>

$buttonColor: #e96656;

.container {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid red;

  .textArea {
    border: 2px solid yellow;

    button {
      min-width: 130px;
      position: relative;
      display: inline-block;

      text-align: center;
      text-transform: uppercase; 

      padding: 15px;
      margin: 30px 25px;

      font-size: 100% + 40%;
      font-weight: 600;
      border: none;

      color: white;
      background-color: $buttonColor;

      transition: 0.5s;

      &:before {
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
        box-shadow: 7px 7px darken($buttonColor, 20%), -7px -7px lighten($buttonColor, 20%);
        cursor: pointer;
          &::before {
          border: 0px ;
        }
      }
    }
  }

  img {
    width: 600px;
    border: 2px solid green;
  }
}

</style>
