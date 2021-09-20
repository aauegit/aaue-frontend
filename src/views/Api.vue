<template>
    <div v-if="!activatedNavbar" class="pageContent">
        <router-link to="/" class="goBack" v-if="!loggedIn"> 
            <Button buttonText="Home"/>
        </router-link>
        <section class="login" v-if="!loggedIn">
                <form @submit.prevent>
                    <img src="@/assets/aaueLogo.png" alt="">
                    <label for="Username">Username</label>
                    <input type="text" v-model="username" name="Username" placeholder="Username" required>
                    <label for="password">Password</label>
                    <input type="password" v-model="password" name="password" placeholder="Password" required>
                    <Button buttonText="Iniciar sessão" @click="logIn">Iniciar sessão</Button>
                </form>
        </section>
        <div class="sidebar" v-if="loggedIn || !formSent">
                <ul>
                    <router-link to="/">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </router-link>
                    <li>
                        <i class="fas fa-pen"></i>
                        <span>Criar notícia</span>
                    </li>
                    <li>
                        <i class="fas fa-edit"></i>
                        <span>Editar notícia</span>
                    </li>
                    <li>
                        <i class="fas fa-trash-alt"></i>
                        <span>Apagar notícia</span>
                    </li>
                </ul>
            
        </div>
        <section class="postBlog" v-if="loggedIn || !formSent">
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
        <div class="postCreated" v-if="formSent">
            <h1>Notícia criada com sucesso!</h1>
            <i class="far fa-check-circle"></i>
            <Button buttonText="Voltar" @click="formSent = false" />
        </div>

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
      username: "",
      password: "",
      titulo: "",
      category: "",
      paragrafo: [],    
      assinatura: "",
      mesDeHoje: "",
      numberOfParagraphs: 1,
      authToken: "",
      errorMessage: "",
      formSent: false,
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
    async logIn() {
        const messageInfo = {
            username: this.username,
            password: this.password,
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageInfo)
        };

        fetch('https://blogposting-api.herokuapp.com/api/user/login', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            this.authToken = data.token;
            this.loggedIn = true;
        })
        .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
        });
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

    async publishNews() {

        const news = {
            title: this.titulo,
            category: this.category,
            categoryColor: this.getCategoryColor(this.category),
            date: this.diaDeHoje + this.mesDeHoje,
            paragraphs: this.paragrafo,
            imageLink: "linkfixeya",
            signature: this.assinatura,
            token: this.authToken,
        }

        if(this.authToken) {
            const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             },
            body: JSON.stringify(news)
            };

            await fetch('https://blogposting-api.herokuapp.com/api/createBlogpost', requestOptions)
            .then((data) => {
                if(data.ok) {
                    this.formSent = true;
                    this.titulo = ""
                    this.category = ""
                    this.category = ""
                    this.diaDeHoj = ""
                    this.mesDeHoje = ""
                    this.paragrafo = ""
                    this.assinatura = ""
                }
            })
            .catch((error) => {
                this.errorMessage = error.message;
                console.log(error);
            })
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
    display: flex;
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

.postCreated {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 30%;
    top: 25%;
    background-color: #f1f0f0;
    border-radius: 25px;
    padding: 50px;
    width: 40vw;
    box-shadow: rgba(83, 83, 83, 0.35) 0px 5px 10px;


    i {
        margin: 35px 0;
        font-size: 100px;
        color:  #4BB543;
    }
}

.sidebar {
    height: 100vh;
    position: fixed;
    border-right: 1px solid black;
    background-color: #0f0f0f;
    top: 0;
    left: 0;

    ul {
        color: white;

        a {
            padding: 20px;
            display: flex;
            align-items: center;
            opacity: 1;
            color: white;
            border-bottom: 1px solid #5e5e5e;
            border-top: 1px solid #5e5e5e;
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);


            span {
                display: none;
                font-size: 20px;
                margin-left: 10px;
            }

            i {
                font-size: 30px;
            }
        }

        li {
            display: flex;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #5e5e5e;
            border-top: 1px solid #5e5e5e;
            cursor: pointer;
            width: 85px;
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);


            span {
                display: none;
                font-size: 20px;
                transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
                width: 0;
                margin-left: 10px;
            }

            i {
                font-size: 30px;
            }
            
        }
    }

    &:hover {
        
        li,
        a {
            width: 300px;
                    
            span {
                display: block;
                width: 200px;
            }

            &:hover span{
                letter-spacing: 1px;
            }
        }
    }
}
</style>