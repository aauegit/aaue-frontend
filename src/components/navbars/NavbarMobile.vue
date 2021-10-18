<template>
  <nav class="mobileNav">
    <ul class="navLinks" :class="isActive">
      <li @click="toggleClass">
        <router-link :to="{ name: 'Home' }"> Home</router-link>
      </li>
      <li @click="toggleClass">
        <router-link :to="{ name: 'Noticias' }"> Notícias</router-link>
      </li>
      <li class="dropdown" @click="openEventos = !openEventos">
        <a
          >Eventos
          <i class="fas fa-chevron-down" :class="{ activated: openEventos }"></i
        ></a>
        <div class="subMenu" v-if="openEventos">
          <router-link
            :to="{ name: 'Rececao' }"
            @click="snapToElement('body') && toggleClass"
            >Receção ao Caloiro</router-link
          >
          <a
            href="https://expoestudante.aaue.pt/#/"
            @click="snapToElement('body') && toggleClass"
            >Expo Estudante</a
          >
          >
          <a
            href="http://queima.aaue.pt/"
            @click="snapToElement('body') && toggleClass"
            >Queima das Fitas</a
          >
          >
        </div>
      </li>
      <li class="dropdown" @click="openAssociacao = !openAssociacao">
        <a
          >Associação
          <i
            class="fas fa-chevron-down"
            :class="{ activated: openAssociacao }"
          ></i
        ></a>
        <div class="subMenu" v-if="openAssociacao">
          <router-link
            :to="{ name: 'Presidencia' }"
            @click="snapToElement('body') && toggleClass"
            >Presidência</router-link
          >
          <router-link
            :to="{ name: 'Assembleia' }"
            @click="snapToElement('body') && toggleClass"
            >Assembleia Magna</router-link
          >
          <router-link
            :to="{ name: 'Fiscal' }"
            @click="snapToElement('body') && toggleClass"
            >Conselho Fiscal</router-link
          >
          <router-link
            :to="{ name: 'Setores' }"
            @click="snapToElement('body') && toggleClass"
            >Setores</router-link
          >
          <router-link
            :to="{ name: 'Autonomas' }"
            @click="snapToElement('body') && toggleClass"
            >Secções Autónomas</router-link
          >
          <router-link
            :to="{ name: 'Sobre' }"
            @click="snapToElement('body') && toggleClass"
            >Sobre nós</router-link
          >
          <router-link
            :to="{ name: 'Estatutos' }"
            @click="snapToElement('body') && toggleClass"
            >Estatutos</router-link
          >
          <router-link
            :to="{ name: 'GuiaEstudante' }"
            @click="snapToElement('body') && toggleClass"
            >Guia do Estudante</router-link
          >
        </div>
      </li>
      <li class="dropdown" @click="openPlataformas = !openPlataformas">
        <a
          >Plataformas
          <i
            class="fas fa-chevron-down"
            :class="{ activated: openPlataformas }"
          ></i
        ></a>
        <div class="subMenu" v-if="openPlataformas">
          <a
            href="https://alojamento.aaue.pt/"
            @click="snapToElement('body') && toggleClass"
            >Portal do Alojamento</a
          >
          >
          <a
            href="http://torneioreitor.aaue.pt/"
            @click="snapToElement('body') && toggleClass"
            >Desporto</a
          >
          >
        </div>
      </li>
      <li @click="toggleClass">
        <router-link :to="{ name: 'Servicos' }"> Serviços</router-link>
      </li>
      <li @click="toggleClass">
        <router-link :to="{ name: 'Contactos' }"> Contactos</router-link>
      </li>
    </ul>

    <div class="burger" @click="toggleClass">
      <div v-if="!isActive" class="burgerText">MENU</div>
      <div class="drawing" :class="newClass">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import { snapToElement } from "@/functions/globals.js";
export default {
  name: "MobileNav",
  data() {
    return {
      toggle: false,
      newClass: "",
      isActive: "",
      openEventos: false,
      openAssociacao: false,
      openPlataformas: false,
    };
  },
  methods: {
    snapToElement,
    toggleClass() {
      this.toggle = !this.toggle;
      this.toggle ? (this.newClass = "toggle") : (this.newClass = "");
      this.toggle ? (this.isActive = "isActive") : (this.isActive = "");
    },
  },
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}
.mobileNav {
  position: absolute;
  z-index: 10;
  width: 100%;
  opacity: 1;
  color: #000;
  padding: 35px 100px;
  background-color: #f7f8fc;
  box-shadow: 0 5px 11px 0 rgba(50, 50, 50, 0.164);

  .navLinks {
    position: absolute;
    right: 0;
    min-height: 100vh;
    top: 0;
    background-color: #000000;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    opacity: 0;
    width: 100%;
    transition: all 0.4s ease-in;
    li {
      opacity: 1;
      letter-spacing: 5px;
      padding: 10px;
      margin: 10px 0;
      font-size: 20px;
      text-transform: uppercase;

      a {
        color: white;
      }
    }

    .dropdown {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      i {
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      .activated {
        transform: rotateX(180deg) !important;
      }

      .subMenu {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        flex-wrap: wrap;

        a {
          font-size: 14px;
          flex: 0 0 40%;
          text-align: center;
          margin-left: 20px;
          color: white;
          padding: 15px;
          margin: 10px;
          background: black;
          min-width: 80vw;
        }
      }
    }
  }

  .isActive {
    position: absolute;
    transform: translateX(0%);
    display: flex;
    opacity: 1;
  }
  .burger {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    .burgerText {
      font-size: 20px;
      letter-spacing: 3px;
    }
    .drawing div {
      width: 35px;
      height: 3px;
      margin: 5px;
      background-color: black;
      transition: all 0.3s ease;
    }
    .toggle {
      .line1 {
        background-color: white;
        transform: rotate(-45deg) translate(-5px, 6px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        background-color: white;
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }
}
</style>
