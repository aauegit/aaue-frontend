<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
        <section class="contacts">
            <div class="contactForm">
                <img src="@/assets/pomba.png" alt="">
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
                        <button>reCaptcha</button>
                        <button>Enviar </button>
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

$specialColor: #155781;

.contacts {
    display: flex;
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

        img {
            position: absolute;
            bottom: 0;
            left: 17%;
            height: 500px;
        }


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
                color: #ff0000;
                opacity: 0.5;
            }

            .mensagem {
                padding: 5px;
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

                button {
                    max-width: 300px;
                    position: relative;
                    display: inline-block;

                    text-align: center;
                    text-transform: uppercase; 

                    padding: 15px 30px;

                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 5px;
                    border: none;

                    color: $specialColor;
                    background-color: white;

                    transition: all 0.5s;

                    &:nth-child(1) {
                        margin-right: 50px;
                    }

                    &::before {
                        position: absolute;
                        content:"";
                        border-radius: 5px;
                        border-top: 5px solid lighten($specialColor, 5%);
                        border-left: 5px solid lighten($specialColor, 5%);	
                        border-right: 5px solid darken($specialColor, 5%);
                        border-bottom: 5px solid darken($specialColor, 5%);

                        top: 0px;
                        right: 0px;
                        bottom: 0px;
                        left: 0px;	

                        transition: 0.5s;
                    }

                    &:hover {
                        box-shadow: 7px 7px darken($specialColor, 10%), -7px -7px lighten($specialColor, 10%);
                        background-color: $specialColor;
                        color: #f7f7f7;
                        cursor: pointer;

                        &::before {
                        border: 0px;
                        }
                    }
                }
            }
        }
    }
}
</style>