<template>
    <ScrollToTopButton v-if="!isAtTop"  @click="scrollToElement('body')"/>
    <NavbarMobile v-if="(mobileMode && isAtTop) || (activatedNavbar && mobileMode)" @click="activatedNavbar = !activatedNavbar" />
    <Navbar v-if="!mobileMode" class="navbar" />
    <div v-if="!activatedNavbar" class="pageContent">
        <section class="contacts">
            <div class="contactInfo">
                <h1>Tens alguma questão? Contacta-nos!</h1>
                <img src="@/assets/activism.jpeg" alt="">
                <ul>
                    <li><i class="fas fa-map-marker-alt" aria-hidden="true"></i><a href="https://goo.gl/maps/hMu13iR5NiM2">Rua Diogo Cão nº 21 7000-872 Évora</a></li>
                    <li><i class="fas fa-envelope" aria-hidden="true"></i><a href="mailto:geral@aaue.pt">geral@aaue.pt</a></li>
                    <li><i class="fas fa-phone" aria-hidden="true"></i><a href="tel:+351266098003">+ 351 266 09 80 03</a></li>
                </ul>
            </div>
            <div class="form">
                <form action="">
                    <label for="">Nome <span>*</span>
                    </label>
                    <input type="text" placeholder="Nome" required>
                    <label for="">Email <span>*</span>
                    </label>
                     <input type="email" placeholder="Email" required>
                    <label for="">Assunto <span>*</span>
                    </label>
                    <input type="text" placeholder="Assunto" required>
                    <label for="">Mensagem <span>*</span>
                    </label>
                    <textarea class="mensagem" placeholder="Mensagem" required />
                    <div class="buttons">
                        <button>reCaptcha</button>
                        <button>Enviar Mensagem</button>
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

$specialColor: #155781;

.contacts {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    background-color: #f7f8fc;

    .contactInfo {

        h1 {
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
            width: 500px;
            padding: 30px;
            margin-right: 50px;
            background: white;
            box-shadow:  5px 5px 10px #e7e7e7,
             -5px -5px 10px #ffffff;

            label {
                margin-bottom: 5px;
                text-transform: uppercase;
                font-weight: bold;
                color: $specialColor;
            }

            input {
                height: 40px;
                padding-left: 5px;
                border: 1px solid #bebebe;
                margin-bottom: 20px;
            }

            span {
                color: #ff0000;
                opacity: 0.5;
            }

            .mensagem {
                padding: 5px;
                height: 200px;
                resize: none;
                margin-bottom: 40px;
            }

            .buttons {
                display: flex;
                justify-content: space-between;

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
                    border-radius: 5px;
                    border: none;

                    color: $specialColor;
                    background-color: white;

                    transition: all 0.5s;

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