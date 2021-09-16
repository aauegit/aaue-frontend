<template>
    <div v-if="!activatedNavbar" class="pageContent">
        <router-link to="/" class="goBack"> 
            <Button buttonText="Home"/>
        </router-link>
        <section class="login" v-if="!loggedIn">
                <form >
                    <img src="@/assets/aaueLogo.png" alt="">
                    <label for="username">Username</label>
                    <input type="text" v-model="username" name="username" placeholder="Username" required>
                    <label for="password">Password</label>
                    <input type="password" v-model="password" name="password" placeholder="Password" required>
                    <Button buttonText="Iniciar sessão" @click="logIn">Iniciar sessão</Button>
                </form>
        </section>
        <section class="postBlog" v-if="loggedIn">
            <h1>Criar nova publicação</h1>
            <div class="forms">
                <form @submit.prevent>
                    <label for="titulo">Título</label>
                    <input type="text" id="titulo" v-model="titulo" placeholder="Episódio V: O Império Contra-Ataca" required>
                    <label for="category">Categoria principal</label>
                    <select name="category" id="category" v-model="category" required>
                        <option value="Comunicados">Comunicados</option>
                        <option value="Desporto">Desporto</option>
                        <option value="Discursos">Discursos</option>
                        <option value="Ensino">Ensino</option>
                        <option value="Geral">Geral</option>
                        <option value="Politica">Politica</option>
                    </select>
                    <label for="outrasCategorias">Outras Categorias:</label>
                    <div class="outrasCategorias">
                        <div class="catComunicados" v-if="category != 'Comunicados'">
                            <input type="checkbox">
                            <label for="catComunicados">Comunicados</label>
                        </div>
                    </div>
                    <label for="data">Data: {{ diaDeHoje }} de {{ mesDeHoje }}</label>
                    <label for="foto">Foto:</label>
                    <Dropzone @drop.prevent="drop" @change="selectedFile"/>
                    <span>Ficheiro: {{ dropzoneFile.name }}</span> 
                    <label for="assinatura">Assinatura</label>
                    <input type="text" id="assinatura" v-model="assinatura" placeholder="Mestre Yoda" required> 
                    <Button buttonText="Publicar" @click="publishNews"/>
                </form>
                <form class="formDeParagrafos" >
                    <div class="paragraph" v-for="index in numberOfParagraphs" :key="index">
                        <div class="inputs">
                            <label for="paragrafo">Parágrafo</label>
                            <textarea type="text" id="paragrafo" v-model="paragrafo[index - 1]" placeholder="Há muito tempo, em uma galáxia muito, muito distante..." required /> 
                        </div>
                        <i class="fas fa-plus" @click="incrementNumberOfParagraphs"></i>
                        <i class="fas fa-times" @click="decrementNumberOfParagraphs"></i>
                    </div>
                </form>
            </div>
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
      loggedIn: false,
      username: "",
      password: "",
      titulo: "",
      category: "",
      paragrafo: [],    
      assinatura: "",
      mesDeHoje: "",
      numberOfParagraphs: 1,
      authToken: "",
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
    this.mesDeHoje = this.getMes();
  },
   methods: {
    getImgURL(image) {
        return require('@/assets/' + image).default;
    },
    logIn() {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ username: this.username, password: this.password})
        };

        fetch('https://blogposting-api.herokuapp.com/api/user/login', requestOptions)
        .then((data) => {
            console.log(response.headers);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally( () => this.loggedIn = true)
    },

    getCategoryColor(category) {
        switch (category) {
            case 'Comunicados':
                return '#BAC0CB'
            case 'Desporto':
                return '#BA292C'
            case 'Discursos':
                return '#549EFF'
            case 'Ensino':
                return '#00BD9D'
            case 'Geral':
                return '#F8D01C'
            case 'Politica':
                return '#FF7733'
            default:
                return '000000';
        }
    },

    publishNews() {

        /* fetch('https://blogposting-api.herokuapp.com/api/user/login')
        .then((currentNews) => {
            console.log(response.headers)
            this.currentNews = currentNews;
        })
        .catch((error) => {
            this.errorMessage = error.message;
            console.log(error);
        })
        .finally( () => this.loggedIn = true)
 */
        const news = {
            title: this.titulo,
            category: this.category,
            categoryColor: this.getCategoryColor(this.category),
            date: `${this.diaDeHoje} de ${this.mesDeHoje}`,
            paragraphs: this.paragrafo,
            imageLink: "linkfixeya",
            signature: this.assinatura,
        }

        console.log(news);
    },

    incrementNumberOfParagraphs() {
        this.numberOfParagraphs++;
    },

    decrementNumberOfParagraphs() {

        if(this.numberOfParagraphs <= 1) {
            this.numberOfParagraphs = 1;
        }

        else {
            this.numberOfParagraphs--;
            this.paragrafo.pop();
        }
    }
  },
});
</script>

<style lang="scss" scoped>

.pageContent {
    padding-top: 0;
}

section {
    padding: 100px 100px 100px 100px;
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

    .forms {
        display: flex;
        align-items: flex-start;
    }
    
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

        select {
            padding: 5px;
        }

        span {
            margin-top: 10px;
        }

        &:nth-child(1) {
            margin-right: 250px;
        }
        
        #assinatura {
            margin-bottom: 35px;
        }
    }



    .formDeParagrafos {

        .paragraph {
            display: flex;
            flex-direction: row;
            align-items: center;

            
        }

        .inputs {
            display: flex;
            flex-direction: column; 
        }

        i {
            font-size: 25px;
            padding: 7px;
            border-radius: 50%;
            margin: 50px 10px 0 10px;
            border: 1px solid black;
            cursor: pointer;

            &:nth-child(2) {
                padding: 7px 9px;
            }

            &:nth-child(3) {
                padding: 7px 11px;
            }
        }
    }
}

</style>