<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
        <section class="servicos">
            <div class="copiaki">
                <img src="@/assets/servicos/copiaki.png" alt="">
                <div class="serviceContent">
                    <p class="morada"><span>Morada: </span>Rua Romão Ramalho, Nº 59, 7000-631 Évora</p>
                    <p class="contacto"><span>Contacto: </span>926 453 981</p>
                    <ul class="servico"><span>Serviços: </span> 
                        <li>- Cópias</li>
                        <li>- Impressões</li>
                        <li>- Encadernações</li>
                        <li>- Venda de material escolar</li>
                        <li>- Venda de emblemas académicos</li>
                    </ul>
                    <p class="horario"><span>Horário: </span>9:00 – 13:00  |  14:00 – 19:00 (fechado: Sábado e Domingo) </p>
                </div>
                <a href="https://www.facebook.com/copiakiue/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            </div>
            <div class="vidaAcademica" v-if="aberto">
                <img src="@/assets/servicos/vidaacademica.png" alt="">
                <div class="serviceContent">
                    <p class="morada"><span>Morada: </span>Rua Diogo Cão, Nº 21, 7000-872 Évora</p>
                    <p class="contacto"><span>Contacto: </span>916 674 103</p>
                    <ul class="servico"><span>Produtos: </span> 
                        <li>- Trajes Académicos</li>
                        <li>- Emblemas e Pins</li>
                        <li>- Brindes</li>
                        <li>- Pijamas Cirúrgicos e Batas</li>
                        <li>- Vestuário diverso</li>
                    </ul>
                    <p class="horario"><span>Horário: </span>11:00 – 15:00  |  16:00 – 20:00 (fechado: Sábado e Domingo)</p>
                </div>
                <div class="links">
                  <a href="hhttps://www.facebook.com/loja.v.academica/" target="_blank"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
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
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Servicos',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      aberto: false,
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

.servicos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    padding-bottom: 100px;

    .vidaAcademica,
    .copiaki {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        img {
            width: 150px;
            margin-bottom: 25px;
        }

        .serviceContent {
            align-items: normal;
            margin: 0px 0 25px 0;

            p,
            ul {
                margin-bottom: 25px;

            }

            li {
                margin: 5px 0 5px 0;
            }

            span {
                font-weight: bold;
            }
        }

        a {
            opacity: 1;
        }


        .fa-facebook-square {
            font-size: 50px;
            margin-bottom: 25px;
            color: #3b5998;
            transition: transform 0.2s ease-in;

            &:hover {
                transform: scale(1.1);
            }
        }

        .fa-shopping-cart {
            font-size: 50px;
            margin-bottom: 25px;
            color: #e96656;
            margin-left: 75px;
            transition: transform 0.2s ease-in;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}

</style>