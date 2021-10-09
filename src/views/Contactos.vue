<template>
  <div class="pageContent">
    <section class="contacts">
      <div class="contactForm" v-if="!sendingEmail">
        <div class="contactInfo">
          <h1>
            Tens alguma questão?<br />
            Contacta-nos!
          </h1>
          <div class="contactIcons">
            <ul>
              <a href="https://goo.gl/maps/hMu13iR5NiM2">
                <i class="fas fa-map-marker-alt" aria-hidden="true"
                  ><span>Morada</span></i
                >
                <li>Rua Diogo Cão nº 21 7000-872 Évora</li>
              </a>
              <a href="mailto:geral@aaue.pt">
                <i class="fas fa-envelope" aria-hidden="true"
                  ><span>Email</span></i
                >
                <li>geral@aaue.pt</li>
              </a>
              <a href="tel:+351266098003">
                <i class="fas fa-phone" aria-hidden="true"
                  ><span>Telefone</span></i
                >
                <li>+ 351 266 09 80 03</li>
              </a>
            </ul>
          </div>
        </div>
        <form action="POST" @submit.prevent="sendFormData">
          <label for="name">Nome <span>*</span></label>
          <input
            type="text"
            placeholder="Nome"
            id="name"
            v-model="name"
            required
          />
          <label for="email">Email <span>*</span></label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            v-model="email"
            required
          />
          <label for="assunto">Assunto <span>*</span></label>
          <input
            type="text"
            placeholder="Assunto"
            id="assunto"
            v-model="assunto"
            required
          />
          <label for="mensagem">Mensagem <span>*</span></label>
          <textarea
            class="mensagem"
            placeholder="Mensagem"
            id="mensagem"
            v-model="mensagem"
            required
          />
          <div class="buttons" :class="{ isActive: isFormFilled }">
            <Button
              buttonText="Enviar mensagem"
              class="g-recaptcha"
              data-sitekey="6LcQvp4cAAAAAGNx5TXt5zWBQ1lHd_mhHyit-Plq"
              data-callback="onSubmit"
              data-action="submit"
            />
          </div>
        </form>
      </div>
      <div class="modal" v-else>
        <img
          v-if="!emailSent && !emailFailed"
          src="@/assets/api/spinning-circle.gif"
          alt=""
        />
        <div v-else-if="emailSent" class="sucess">
          <h1>Mensagem enviada</h1>
          <i class="far fa-check-circle sucessIcon"></i>
          <Button buttonText="Voltar" @click="resetEmailSendingValues" />
        </div>
        <div v-else-if="emailFailed" class="failure">
          <h1>Ocorreu um erro</h1>
          <i class="fas fa-exclamation-circle errorIcon"></i>
          <p>
            Por favor volte a tentar mais tarde ou envie uma mensagem para
            geral@aaue.pt
          </p>
          <Button buttonText="Voltar" @click="resetEmailSendingValues" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Button from "../components/Button.vue";

export default {
  name: "Contactos",
  data() {
    return {
      emailSent: false,
      emailFailed: false,
      sendingEmail: false,
      name: "",
      email: "",
      assunto: "",
      mensagem: "",
      isFormFilled: false,
    };
  },
  setup() {
    let name = ref("");
    let email = ref("");
    let assunto = ref("");
    let mensagem = ref("");
    let isFormFilled = ref(false);

    watch([name, email, assunto, mensagem], () => {
      if (name.value && email.value && assunto.value && mensagem.value) {
        isFormFilled.value = true;
      } else {
        isFormFilled.value = false;
      }
    });

    return {
      isFormFilled: isFormFilled,
      name: name,
      email: email,
      assunto: assunto,
      mensagem: mensagem,
    };
  },
  components: {
    Button,
  },
  methods: {
    async sendFormData() {
      if (!this.isFormFilled) {
        return;
      }

      this.sendingEmail = true;

      const formData = {
        sendTo: "informativa@aaue.pt",
        subject: this.assunto,
        message: {
          origem: "AAUE.pt",
          name: this.name,
          email: this.email,
          text: this.mensagem,
        },
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      await fetch(
        "https://blogposting-api.herokuapp.com/api/sendEmail",
        requestOptions
      )
        .then(async (data) => {
          if (data.ok) {
            this.emailSent = true;
            this.clearFormInfo();
          }
        })
        .catch((error) => {
          this.emailFailed = true;
          console.log(error.message);
        });
    },
    clearFormInfo() {
      this.name = "";
      this.email = "";
      this.assunto = "";
      this.mensagem = "";
    },
    resetEmailSendingValues() {
      this.sendingEmail = false;
      this.emailSent = false;
      this.emailFailed = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$specialColor: #2c3e50;

.pageContent {
  padding-top: 0px;
}

.contacts {
  display: flex;
  min-height: 100vh;
  padding-top: 5vh;
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
          font-family: "Roboto", sans-serif;

          i {
            margin-right: 10px;
            color: $specialColor;

            span {
              font-family: "Roboto", sans-serif;
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
          font-family: "Roboto", sans-serif;
        }

        &::-moz-placeholder {
          font-family: "Roboto", sans-serif;
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
          font-family: "Roboto", sans-serif;
        }

        &::-moz-placeholder {
          font-family: "Roboto", sans-serif;
        }
      }

      .buttons {
        display: flex;

        .button {
          cursor: not-allowed;
          opacity: 0.4;
          border-radius: 0;
          margin-left: 0;

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
    }
  }

  .modal {
    width: 500px;
    min-height: 300px;
    padding: 20px 50px;
    border-radius: 25px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .sucess,
    .failure {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .errorIcon {
        margin: 20px 0 0 0;
        font-size: 100px;
        color: #992c2c;
      }

      .sucessIcon {
        margin: 35px 0;
        font-size: 100px;
        color: #4bb543;
      }

      p {
        margin: 20px 0;
      }
    }
  }
}

@media (max-width: 1500px) {
  .contacts .contactForm form {
    padding-top: 0;
  }
}
</style>
