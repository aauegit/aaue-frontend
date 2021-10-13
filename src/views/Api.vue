<template>
  <div class="pageContent">
    <section class="login" v-if="!loggedIn">
      <form @submit.prevent>
        <img src="@/assets/aaueLogo.png" alt="" />
        <label for="Username">Username</label>
        <input
          type="text"
          v-model="username"
          name="Username"
          placeholder="Username"
          required
        />
        <span v-if="wrongUserError">O usuário não existe</span>
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
          required
        />
        <span v-if="wrongPasswordError">A password está errada</span>
        <div class="buttons" :class="{ isActive: isLoginFormFilled }">
          <Button class="button" buttonText="Iniciar sessão" @click="logIn"
            >Iniciar sessão
          </Button>
        </div>
      </form>
    </section>
    <div class="sidebarAPI" v-if="loggedIn && !formSent">
      <ul>
        <li @click="createNews">
          <i class="fas fa-pen"></i>
          <span>Criar notícia</span>
        </li>
        <li @click="editNews">
          <i class="fas fa-edit"></i>
          <span>Editar notícia</span>
        </li>
        <li @click="deleteNews">
          <i class="fas fa-trash-alt"></i>
          <span>Apagar notícia</span>
        </li>
      </ul>
    </div>
    <section class="postBlog" v-if="loggedIn && !formSent">
      <h1>{{ headerText }}</h1>
      <div class="getNoticia">
        <select
          name="selectnoticia"
          id="selectnoticia"
          v-model="selectedNoticia"
          v-if="
            headerText == 'Editar notícia' || headerText == 'Eliminar notícia'
          "
        >
          <option v-for="titulo in titulos" :key="titulo.id">{{
            titulo.title
          }}</option>
        </select>
      </div>
      <div
        class="forms"
        v-if="headerText == 'Criar nova notícia' || selectedNoticia"
      >
        <form @submit.prevent>
          <label for="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            v-model="titulo"
            placeholder="Episódio V: O Império Contra-Ataca"
            required
          />
          <label for="category">Categoria principal</label>
          <select name="category" id="category" v-model="category" required>
            <option value="Comunicados">Comunicados</option>
            <option value="Desporto">Desporto</option>
            <option value="Discursos">Discursos</option>
            <option value="Ensino">Ensino</option>
            <option value="Geral">Geral</option>
            <option value="Politica">Politica</option>
          </select>
          <!-- <label for="outrasCategorias">Outras Categorias:</label>
          <div class="outrasCategorias">
            <div class="catComunicados" v-if="category != 'Comunicados'">
              <input type="checkbox" />
              <label for="catComunicados">Comunicados</label>
            </div>
          </div> -->
          <label for="data"
            >Data: {{ diaDeHoje }} de {{ mesDeHoje }}, {{ anoDeHoje }}</label
          >
          <label for="foto">Foto:</label>
          <Dropzone @drop.prevent="drop" @change="selectedFile" />
          <span>Ficheiro: {{ dropzoneFile.name }}</span>
          <label for="assinatura">Assinatura</label>
          <input
            type="text"
            id="assinatura"
            v-model="assinatura"
            placeholder="Mestre Yoda"
          />
          <div class="buttons" :class="{ isActive: isFormFilled }">
            <Button buttonText="Publicar" @click="publishNews" />
          </div>
        </form>
        <form class="formDeParagrafos">
          <div
            class="paragraph"
            v-for="index in numberOfParagraphs"
            :key="index"
          >
            <div class="inputs">
              <label for="paragrafo">{{ index }}º Parágrafo</label>
              <textarea
                type="text"
                id="paragrafo"
                v-model="paragrafo[index - 1]"
                placeholder="Há muito tempo, em uma galáxia muito, muito distante..."
                required
              />
            </div>
          </div>
          <div class="buttonsParagraphs">
            <i class="fas fa-plus" @click="incrementNumberOfParagraphs"></i>
            <i class="fas fa-times" @click="decrementNumberOfParagraphs"></i>
          </div>
        </form>
      </div>
    </section>
    <div class="postCreated" v-if="formSent">
      <h1>Notícia criada com sucesso!</h1>
      <i class="far fa-check-circle"></i>
      <Button class="button" buttonText="Voltar" @click="formSent = false" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Dropzone from "@/components/Dropzone.vue";
import { ref, watch } from "vue";

export default {
  name: "Api",
  data() {
    return {
      loggedIn: false,
      isLoginFormFilled: false,
      username: "",
      password: "",
      wrongUserError: "",
      wrongPasswordError: "",
      headerText: "Criar nova notícia",
      selectedNoticia: "",
      currentNoticia: {
        title: "",
        id: "",
      },
      titulos: [],
      titulo: "",
      category: "",
      paragrafo: [],
      isFormFilled: false,
      assinatura: "",
      mesDeHoje: "",
      numberOfParagraphs: 1,
      authToken: "",
      errorMessage: "",
      formSent: false,
      noticiaId: "",
    };
  },
  setup() {
    let dropzoneFile = ref("");
    const drop = (event) => {
      dropzoneFile.value = event.dataTransfer.files[0]; //Get first file in files array
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    const diaDeHoje = new Date().getDate();
    const anoDeHoje = new Date().getFullYear();
    const getMes = () => {
      let month = new Date().getMonth() + 1; // O valor é incrementado por motivos de logica, visto que Janeiro = 0
      switch (month) {
        case 1:
          return "Janeiro";
        case 2:
          return "Fevereiro";
        case 3:
          return "Março";
        case 4:
          return "Abril";
        case 5:
          return "Maio";
        case 6:
          return "Junho";
        case 7:
          return "Julho";
        case 8:
          return "Agosto";
        case 9:
          return "Setembro";
        case 10:
          return "Outubro";
        case 11:
          return "Novembro";
        case 12:
          return "Dezembro";
        default:
          break;
      }
    };

    let titulo = ref("");
    let category = ref("");
    let paragraphs = ref([]);
    let isFormFilled = ref(false);

    watch([titulo, category, paragraphs], () => {
      if (titulo.value && category.value && paragraphs.value) {
        isFormFilled.value = true;
      } else {
        isFormFilled.value = false;
      }
    });

    let username = ref("");
    let password = ref("");
    let isLoginFormFilled = ref(false);

    watch([username, password], () => {
      if (username.value && password.value) {
        isLoginFormFilled.value = true;
      } else {
        isLoginFormFilled.value = false;
      }
    });

    return {
      dropzoneFile,
      drop,
      selectedFile,
      diaDeHoje,
      getMes,
      anoDeHoje,
      isFormFilled: isFormFilled,
      titulo: titulo,
      category: category,
      isLoginFormFilled: isLoginFormFilled,
      username: username,
      password: password,
    };
  },
  watch: {
    async selectedNoticia(newNoticia, oldNoticia) {
      let noticiaID;

      for (let index in this.titulos) {
        if (this.titulos[index].title == newNoticia) {
          noticiaID = this.titulos[index].id;
        }
      }

      await this.getNoticiaInfo(noticiaID);
    },
  },
  components: {
    Button,
    Dropzone,
  },
  created() {
    this.mesDeHoje = this.getMes();
  },
  methods: {
    async logIn() {
      if (!this.isLoginFormFilled) {
        return;
      }

      this.wrongUserError = false;
      this.wrongPasswordError = false;

      const messageInfo = {
        username: this.username,
        password: this.password,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageInfo),
      };

      fetch(
        "https://blogposting-api.herokuapp.com/api/user/login",
        requestOptions
      )
        .then(async (response) => {
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
        .catch((error) => {
          this.errorMessage = error;

          if (this.errorMessage.includes("password")) {
            this.wrongPasswordError = true;
          }

          if (this.errorMessage.includes("User")) {
            this.wrongUserError = true;
          }

          console.error("There was an error!", error);
        });
    },

    getCategoryColor(category) {
      switch (category) {
        case "Comunicados":
          return "#BAC0CB";
        case "Desporto":
          return "#BA292C";
        case "Discursos":
          return "#549EFF";
        case "Ensino":
          return "#00BD9D";
        case "Geral":
          return "#F8D01C";
        case "Politica":
          return "#FF7733";
        default:
          return "000000";
      }
    },

    async publishNews() {
      if (!this.isFormFilled) {
        return;
      }

      const news = {
        title: this.titulo,
        category: this.category,
        categoryColor: this.getCategoryColor(this.category),
        date: "data",
        paragraphs: this.paragrafo,
        imageLink: "linkfixeya",
        signature: this.assinatura,
        token: this.authToken,
      };

      if (this.authToken) {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(news),
        };

        await fetch(
          "https://blogposting-api.herokuapp.com/api/admin/createBlogpost",
          requestOptions
        )
          .then((data) => {
            if (data.ok) {
              this.formSent = true;
              this.clearInfo();
            }
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.log(error);
          });
      }
    },

    incrementNumberOfParagraphs() {
      this.numberOfParagraphs++;
    },

    decrementNumberOfParagraphs() {
      if (this.numberOfParagraphs <= 1) {
        this.numberOfParagraphs = 1;
      } else {
        this.numberOfParagraphs--;
        this.paragrafo.pop();
      }
    },

    createNews() {
      this.headerText = "Criar nova notícia";
      this.currentNoticia = "";
      this.clearInfo();
    },

    async editNews() {
      this.headerText = "Editar notícia";
      this.currentNoticia = "";
      await this.getTitulosDasNoticias();
    },

    async deleteNews() {
      this.headerText = "Eliminar notícia";
      this.currentNoticia = "";
      await this.getTitulosDasNoticias();
    },

    async getTitulosDasNoticias() {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      await fetch(
        `https://blogposting-api.herokuapp.com/api/getAllBlogpostTitles`,
        requestOptions
      ).then(async (response) => {
        this.titulos = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      });
    },

    async getNoticiaInfo(destination) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const url = `https://blogposting-api.herokuapp.com/api/getBlogpost/${destination}`;

      await fetch(url, requestOptions).then(async (response) => {
        let data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        this.titulo = data.title;
        this.category = data.category;
        this.category = data.categoryColor;
        this.dataDePublicacao = data.date;
        this.paragrafo = data.paragraphs;
        this.numberOfParagraphs = data.paragraphs.length;
        this.assinatura = data.signature;
      });
    },

    clearInfo() {
      this.titulo = "";
      this.category = "";
      this.category = "";
      this.dataDePublicacao = "";
      this.paragrafo = [];
      this.assinatura = "";
      this.numberOfParagraphs = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.pageContent {
  padding-top: 0vh;
  min-height: 100vh;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    padding: 50px;
    border-radius: 10px;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
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

    span {
      margin-top: 10px;
      color: red;
    }

    button {
      margin-top: 30px;
    }
  }
}

.postBlog {
  padding-top: 17vh;
  min-height: 100vh;
  margin-left: 1.5rem;

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
        font-family: "Roboto", sans-serif;
      }
      &::-moz-placeholder {
        font-family: "Roboto", sans-serif;
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

    .buttonsParagraphs {
      i {
        font-size: 25px;
        padding: 7px;
        border-radius: 50%;
        margin: 10px;
        border: 1px solid black;
        cursor: pointer;

        &:nth-child(1) {
          padding: 7px 9px;
        }

        &:nth-child(2) {
          padding: 7px 11px;
        }
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
    color: #4bb543;
  }
}

.sidebarAPI {
  height: 100vh;
  position: fixed;
  border-right: 1px solid black;
  background-color: #0f0f0f;
  top: 0;
  left: 0;
  z-index: 10;

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
        font-size: 25px;
      }
    }

    li {
      display: flex;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #5e5e5e;
      border-top: 1px solid #5e5e5e;
      cursor: pointer;
      width: 70px;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

      span {
        display: none;
        font-size: 20px;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        width: 0;
        margin-left: 10px;
      }

      i {
        font-size: 25px;
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

      &:hover span {
        letter-spacing: 1px;
      }
    }
  }
}

.getNoticia {
  display: flex;
  margin-top: 25px;

  select {
    max-width: 400px;
    height: 40px;
  }

  .disabled {
    cursor: not-allowed;
  }
}

.buttons {
  display: flex;

  .button {
    cursor: not-allowed;
    opacity: 0.4;
    border-radius: 0;
    margin-left: 0;
    width: 100%;

    &:hover {
      transform: translateY(0px);
    }
  }
}

.isActive {
  .button {
    cursor: pointer;
    opacity: 1;

    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
