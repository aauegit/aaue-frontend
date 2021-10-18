<template>
  <nav class="mobileNav">
    <ul class="navLinks" :class="isActive">
      <img class="logoInside" src="@/assets/aaueLogoBranco.png" alt="" />

      <li @click="toggleClass">
        <router-link :to="{ name: 'Home' }"
          ><i class="fas fa-home"></i> Home</router-link
        >
      </li>
      <li @click="toggleClass">
        <router-link :to="{ name: 'Noticias' }"
          ><i class="fas fa-home"></i> Notícias</router-link
        >
      </li>
      <li class="dropdown" @click="openEventos = !openEventos">
        <a>
          <i class="fas fa-home"></i>
          Eventos
          <i class="fas fa-chevron-down" :class="{ activated: openEventos }"></i
        ></a>
        <div class="subMenu" v-if="openEventos">
          <router-link :to="{ name: 'Rececao' }" @click="toggleClass"
            >⚆ Receção ao Caloiro</router-link
          >
          <a href="https://expoestudante.aaue.pt/#/" @click="toggleClass"
            >⚆ Expo Estudante</a
          >
          >
          <a href="http://queima.aaue.pt/" @click="toggleClass"
            >⚆ Queima das Fitas</a
          >
          >
        </div>
      </li>
      <li class="dropdown" @click="openAssociacao = !openAssociacao">
        <a
          ><i class="fas fa-home"></i> Associação
          <i
            class="fas fa-chevron-down"
            :class="{ activated: openAssociacao }"
          ></i
        ></a>
        <div class="subMenu" v-if="openAssociacao">
          <router-link :to="{ name: 'Presidencia' }" @click="toggleClass"
            >⚆ Presidência</router-link
          >
          <router-link :to="{ name: 'Assembleia' }" @click="toggleClass"
            >⚆ Assembleia Magna</router-link
          >
          <router-link :to="{ name: 'Fiscal' }" @click="toggleClass"
            >⚆ Conselho Fiscal</router-link
          >
          <router-link :to="{ name: 'Setores' }" @click="toggleClass"
            >⚆ Setores</router-link
          >
          <router-link :to="{ name: 'Autonomas' }" @click="toggleClass"
            >⚆ Secções Autónomas</router-link
          >
          <router-link :to="{ name: 'Sobre' }" @click="toggleClass"
            >⚆ Sobre nós</router-link
          >
          <router-link :to="{ name: 'Estatutos' }" @click="toggleClass"
            >⚆ Estatutos</router-link
          >
          <router-link :to="{ name: 'GuiaEstudante' }" @click="toggleClass"
            >⚆ Guia do Estudante</router-link
          >
        </div>
      </li>
      <li class="dropdown" @click="openPlataformas = !openPlataformas">
        <a
          ><i class="fas fa-home"></i> Plataformas
          <i
            class="fas fa-chevron-down"
            :class="{ activated: openPlataformas }"
          ></i
        ></a>
        <div class="subMenu" v-if="openPlataformas">
          <a href="https://alojamento.aaue.pt/" @click="toggleClass"
            >⚆ Portal do Alojamento</a
          >
          >
          <a href="http://torneioreitor.aaue.pt/" @click="toggleClass"
            >⚆ Desporto</a
          >
          >
        </div>
      </li>
      <li @click="toggleClass">
        <router-link :to="{ name: 'Servicos' }"
          ><i class="fas fa-home"></i> Serviços</router-link
        >
      </li>
      <li @click="toggleClass">
        <router-link :to="{ name: 'Contactos' }"
          ><i class="fas fa-home"></i> Contactos</router-link
        >
      </li>
    </ul>
    <img v-if="!isActive" class="logo" src="@/assets/aaue.png" alt="" />

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
      if (!this.toggle) {
        snapToElement("body");
      }
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
    /* background-color: #000000f4; */
    background-color: #010105f4;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    opacity: 0;
    width: 100%;
    transition: all 0.4s ease-in;
    li {
      opacity: 1;
      letter-spacing: 2px;
      padding: 10px;
      padding-left: 30px;
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
      align-items: flex-start;
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
        align-items: flex-start;
        flex-direction: column;
        margin-top: 20px;

        a {
          font-size: 14px;
          margin-left: 20px;
          color: white;
          margin: 15px 10px;
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

  .logo {
    position: absolute;
    width: 50px;
    height: auto;
    top: 10px;
    left: 20px;
  }

  .logoInside {
    width: 200px;
    height: auto;
    margin: 50px auto 20px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid #c7c6c6;
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
