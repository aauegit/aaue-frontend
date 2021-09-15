<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
        <section class="contacts">
            <div class="contactForm">
                <div class="contactInfo">
                    <h1>Tens alguma questão? Contacta-nos!</h1>
                    <div class="contactIcons">
                        <ul>
                            <a href="https://goo.gl/maps/hMu13iR5NiM2" >
                                <i class="fas fa-map-marker-alt" aria-hidden="true"><span>Morada</span></i>
                                <li >Rua Diogo Cão nº 21 7000-872 Évora</li>
                            </a>
                            <a href="mailto:geral@aaue.pt" >
                                <i class="fas fa-envelope" aria-hidden="true"><span>Email</span></i>
                                <li >geral@aaue.pt</li>
                            </a>
                            <a href="tel:+351266098003" >
                                <i class="fas fa-phone" aria-hidden="true"><span>Telefone</span></i>
                                <li >+ 351 266 09 80 03</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <form action="POST" @submit.prevent="sendFormData">
                    <label for="name">Nome <span>*</span></label>
                    <input type="text" placeholder="Nome" id="name" v-model="name" required>
                    <label for="email">Email <span>*</span></label>
                    <input type="email" placeholder="Email" id="email"  v-model="email" required>
                    <label for="assunto">Assunto <span>*</span></label>
                    <input type="text" placeholder="Assunto" id="assunto"  v-model="assunto" required>
                    <label for="mensagem">Mensagem <span>*</span></label>
                    <textarea class="mensagem" placeholder="Mensagem" id="mensagem"  v-model="mensagem" required />
                    <div class="buttons">
                        <Button buttonText="Enviar"/>
                        <Button buttonText="Recaptcha" class="lastButton"/>
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
import Button from '../components/Button.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Contactos',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      name: "",
      email: "",
      assunto: "",
      mensagem: "",

    }
  },
  components: {
    Navbar,
    NavbarMobile,
    ScrollToTopButton,
    Footer,
    Button,
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

$specialColor: #2c3e50;

.pageContent {
  padding-top: 0px;
}

.contacts {
    display: flex;
    height: 100vh;
    padding-top: 10vh;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    background-color: #f7f8fc;

    .contactForm {
        position: relative;
        display: flex;
        background: white;
        width: 80vw;
        padding: 50px;
        border-radius: 50px;
        margin: 100px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .contactInfo {
            width: 50%;
            border-right: 1px solid #bebebe;
            padding-right: 30px;

            h1 {
                font-size: 30px;
                margin-bottom: 20px;
            }

            .contactIcons {
                display: flex;
                
                ul a {
                    font-size: 20px;
                    font-family: 'Roboto', sans-serif;

                    i {
                        margin-right: 10px;
                        color: $specialColor;

                        span {
                            font-family: 'Roboto', sans-serif;
                            font-weight: 500;
                            padding-left: 10px;
                        }
                    }

                    li {
                        margin-bottom: 30px;
                    }
                }
            }

        }

        form {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding: 30px 0 30px 30px;

            label {
                margin-bottom: 5px;
                text-transform: uppercase;
                font-weight: bold;
                color: $specialColor;
            }

            input {
                height: 40px;
                padding-left: 5px;
                border: 0;
                outline: 0;
                border-bottom: 1px solid #bebebe;
                margin-bottom: 20px;

                &::placeholder {
                    font-family: 'Roboto', sans-serif;;
                }

                &::-moz-placeholder {
                    font-family: 'Roboto', sans-serif;;
                }
            }

            span {
                opacity: 0.5;
            }

            .mensagem {
                padding: 5px 5px 0 5px;
                height: 40px;
                resize: none;
                border: 0;
                outline: 0;
                border-bottom: 1px solid #bebebe;
                margin-bottom: 40px;

                &::placeholder {
                    font-family: 'Roboto', sans-serif;;
                }

                &::-moz-placeholder {
                    font-family: 'Roboto', sans-serif;;
                }
            }

            .buttons {
                display: flex;
            }
        }
    }
}
</style>