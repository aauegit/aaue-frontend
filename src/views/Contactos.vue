<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
        <section class="contactsHero">
            <h1>Contactos</h1>
            <h2>de estudantes para estudantes</h2>
        </section>
        <section class="contacts">
            <div class="contactInfo">
                <h1>Visita-nos!</h1>
                <img src="@/assets/activism.jpeg" alt="">
                <ul>
                    <li><i class="fas fa-map-marker-alt" aria-hidden="true"></i><a href="https://goo.gl/maps/hMu13iR5NiM2">Rua Diogo Cão nº 21 7000-872 Évora</a></li>
                    <li><i class="fas fa-envelope" aria-hidden="true"></i><a href="mailto:geral@aaue.pt">geral@aaue.pt</a></li>
                    <li><i class="fas fa-phone" aria-hidden="true"></i><a href="tel:+351266098003">+ 351 266 09 80 03</a></li>
                </ul>
            </div>
            <div class="form">
                <form action="">
                    <label for="">Nome
                    </label>
                    <input type="text" placeholder="Nome" required>
                    <label for="">Email
                    </label>
                     <input type="email" placeholder="Email" required>
                    <label for="">Assunto
                    </label>
                    <input type="text" placeholder="Assunto" required>
                    <label for="">Mensagem
                    </label>
                    <input class="mensagem" type="text" placeholder="Mensagem" required>
                    <div class="buttons">
                        <button>reCaptcha</button>
                        <button>Enviar</button>
                    </div>
                    
                </form>
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
  name: 'Contactos',
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

.contactsHero {
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-transform: uppercase;

    h2 {
        margin-top: 30px;
        font-size: 26px;
    }
}

.contacts {
    height: 70vh;
    display: flex;
    justify-content: space-around;

    .contactInfo {

        h1 {
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        img {
            height: 200px;
        }

        ul li {
            margin: 30px 0 30px 0;
            font-size: 20px;

            i {
                margin-right: 10px;
            }

            .fa-phone {
                color:#89CFF0;
            }
            .fa-map-marker-alt {
                color:#e96656;
            }
            .fa-envelope {
                color:#90EE90;
            }
        }
    }

    .form {

        form {
           display: flex;
            flex-direction: column;
            padding: 30px;

            input,
            label {
                margin-bottom: 10px;
            }

            input {
                height: 40px;
                padding-left: 5px;
                border-radius: 5px;
                border: none;
                 box-shadow: 0px 0px 0px 0px #fff9,
                0px 0px 0px 0px #fff9,
                0px 0px 0px 0px #0001,
                0px 0px 0px 0px #0001,
                inset -7px -7px 20px 0px #fff9,
                inset -4px -4px 5px 0px #fff9,
                inset 7px 7px 20px 0px #0003,
                inset 4px 4px 5px 0px #0001;
            }

            .mensagem {
                width: 400px;
                height: 100px;
                margin-bottom: 40px;
            }

            .buttons {
                display: flex;
                justify-content: space-between;

                button {
                    border: 1px solid #e96656;
                    border-radius: 18px;
                    padding: 20px 40px 20px 40px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    transition: all 0.1s ease-in;
                    

                    &:hover {
                        color: white;
                        background-color: #e96656;
                        cursor: pointer;
                    }
                }
            }
        }
       
    }
}
</style>