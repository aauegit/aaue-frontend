<template>
    <div v-if="!activatedNavbar" class="pageContent">
        <router-link to="/" class="goBack"> 
            <Button buttonText="Home"/>
        </router-link>
        <section class="login" v-if="!loggedIn">
                <form >
                    <img src="@/assets/aaueLogo.png" alt="">
                    <label>Username</label>
                    <input type="text" placeholder="Username" required>
                    <label>Password</label>
                    <input type="password" placeholder="Password" required>
                    <Button buttonText="Iniciar sessão" @click="loggedIn = true">Skip</Button>
                </form>
                <button @click="loggedIn = true">Skip</button>
        </section>
        <section class="postBlog" v-if="loggedIn">
            <h1>Criar nova publicação</h1>
            <form action="POST">
                <label for="titulo">Título</label>
                <input type="text" id="titulo" v-model="titulo" required>
                <label for="data">Data: {{ diaDeHoje }} de {{ mesDeHoje }}</label>
                <label for="foto">Foto:</label>
                <Dropzone @drop.prevent="drop" @change="selectedFile"/>
                <span>Ficheiro: {{ dropzoneFile.name }}</span> 
                <label for="paragrafo">Parágrafo</label>
                <textarea type="text" id="paragrafo" v-model="paragrafo" required /> 
                <label for="assinatura">Assinatura</label>
                <input type="text" id="assinatura" v-model="assinatura" required> 
            </form>
        </section>

    </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue';
import Dropzone from '@/components/Dropzone.vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'Template',
  data() {
    return {
      activatedNavbar: false,
      isAtTop: true,
      mobileMode: false,
      loggedIn: true,
      titulo: "",
      paragrafo: "",    
      assinatura: "",
      mesDeHoje: "",
    }
  },
   setup() {
      let dropzoneFile = ref("");
      const drop = (event) => {
        dropzoneFile.value = event.dataTransfer.files[0] //Get first file in files array
      }
      const selectedFile = () => {
        dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
      }

      const diaDeHoje = new Date().getDate();
      const getMes = () => {
        let month = new Date().getMonth() + 1; // O valor é incrementado por motivos de logica, visto que Janeiro = 0
          switch (month) {
              case 1:
                  return 'Janeiro';
              case 2:
                  return 'Fevereiro';
              case 3:
                  return 'Março';
              case 4:
                  return 'Abril';
              case 5:
                  return 'Maio';
              case 6:
                  return 'Junho';
              case 7:
                  return 'Julho';
              case 8:
                  return 'Agosto';
              case 9:
                  return 'Setembro';
              case 10:
                  return 'Outubro';
              case 11:
                  return 'Novembro';
              case 12:
                  return 'Dezembro';
              default:
                  break;
          }
        };

      return { dropzoneFile, drop, selectedFile, diaDeHoje, getMes };
    },
  components: {
    Button,
    Dropzone
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    this.mesDeHoje = this.getMes();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
   methods: {
    getImgURL(image) {
        return require('@/assets/' + image).default;
    },
    scrollToElement(destination) {
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

section {
    padding: 100px;
}

.goBack {
    position: absolute;
    top: 25px;
    left: 100px;
    opacity: 1;
}

.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        padding: 50px;
        border-radius: 10px;
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001;

        label {
            margin-top: 30px;
        }

        input {
            margin: 10px 0 0px 0;
            padding: 10px;
            border: 0;
            border-bottom: 2px solid #cac8c8;
            outline: none;
            background-color: #f7f8fc;

        }

        button {
            margin-top: 30px;
        }
    }
}

.postBlog {
    min-height: 100vh;
    
    h1 {
        font-size: 40px;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 5px;
        }

        textarea {
            padding: 5px;
            width: 400px;
            height: 100px;
            resize: vertical;
        }

        input {
            padding: 5px;
            width: 400px;
            border: 0;
            outline: 0;
            border-bottom: 1px solid #bebebe;
            background-color: #f7f8fc;

            &::placeholder {
                font-family: 'Roboto', sans-serif;
            }
            &::-moz-placeholder {
                font-family: 'Roboto', sans-serif;
            }
        }

        span {
            margin-top: 10px;
        }
    }
}

</style>