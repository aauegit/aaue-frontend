<template>
  <nav class="mobileNav">
    <ul class="navLinks" :class="isActive">
      <img class="logoInside" src="@/assets/aaueLogoBranco.png" alt="" />
      <li @click="toggleClass">
        <router-link :to="{ name: 'Home' }"> Home</router-link>
      </li>
      <li @click="toggleClass">
        <router-link :to="{ name: 'Noticias' }"> Notícias</router-link>
      </li>
      <li class="dropdown" @click="openEventos = !openEventos">
        <a>
          Eventos
          <i class="fas fa-chevron-down" :class="{ activated: openEventos }"></i
        ></a>
        <div class="subMenu" v-if="openEventos">
          <router-link :to="{ name: 'Rececao' }" @click="toggleClass">
            ⚆ Receção ao Caloiro
          </router-link>
          <a href="https://expoestudante.aaue.pt/#/" @click="toggleClass">
            ⚆ Expo Estudante
          </a>
          <a href="http://queima.aaue.pt/" @click="toggleClass">
            ⚆ Queima das Fitas
          </a>
        </div>
      </li>
      <li class="dropdown" @click="openAssociacao = !openAssociacao">
        <a>
          Associação
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
        <a>
          Plataformas
          <i
            class="fas fa-chevron-down"
            :class="{ activated: openPlataformas }"
          ></i
        ></a>
        <div class="subMenu" v-if="openPlataformas">
          <a href="https://alojamento.aaue.pt/" @click="toggleClass"
            >⚆ Portal do Alojamento</a
          >
          <a href="http://torneioreitor.aaue.pt/" @click="toggleClass"
            >⚆ Desporto</a
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
    <router-link class="logoLink" :to="{ name: 'Home' }">
      <img v-if="!isActive" class="logo" src="@/assets/aaue.png" alt="" />
    </router-link>

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
      const body = document.querySelector("body");
      this.toggle = !this.toggle;
      this.newClass = this.toggle ? "toggle" : "";
      this.isActive = this.toggle ? "isActive" : "";
      if (this.toggle) {
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
      } else if (!this.toggle) {
        snapToElement("body");
        const body = document.querySelector("body");
        body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style lang="scss">
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
    position: fixed;
    right: 0;
    min-height: 100%;
    height: 100%;
    top: 0;
    background-color: #010105f6;
    display: none;
    flex-direction: column;
    opacity: 0;
    width: 100%;
    transition: all 0.4s ease-in;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background-color: #f7f8fc;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #333333;
      border-radius: 5px;
    }

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
    position: fixed;
    display: flex;
    opacity: 1;
  }

  .logoLink {
    position: absolute;
    width: 50px;
    height: auto;
    top: 10px;
    left: 45px;
    border-radius: 50%;
    opacity: 1;
  }

  .logo {
    position: relative;
    width: 100%;
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

@media (max-width: 500px) {
  .mobileNav .logoLink {
    left: 15px;
  }
}
</style>
