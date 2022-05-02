<template>
  <header class="header" :class="{ isScrolled: !isAtTop }">
    <nav id="nav">
      <div class="logo">
        <router-link class="logoName" to="/" @click="snapToElement('body')">
          <img src="@/assets/aaueLogo.png" alt="" />
        </router-link>
      </div>
      <ul>
        <li>
          <router-link
            class="navLinks"
            :to="{ name: 'Noticias' }"
            @click="snapToElement('body')"
            >Notícias</router-link
          >
        </li>
        <li
          class="dropdown"
          @mouseover="hoveredEventos = true"
          @mouseleave="hoveredEventos = false"
        >
          <div class="text">
            <a class="navLinks dropdownName">Eventos</a>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="subMenu" v-if="hoveredEventos">
            <router-link :to="{ name: 'Rececao' }"
              >Receção ao Caloiro</router-link
            >
            <a
              href="https://expoestudante.aaue.pt/#/"
              target="_blank"
              rel="noopener noreferrer"
              >Expo'Estudante</a
            >
            <a
              href="http://queima.aaue.pt/"
              target="_blank"
              rel="noopener noreferrer"
              >Queima das Fitas</a
            >
            >
          </div>
        </li>
        <li
          class="dropdown"
          @mouseover="hoveredAssociacao = true"
          @mouseleave="hoveredAssociacao = false"
        >
          <div class="text">
            <a class="navLinks dropdownName">Associação</a>
            <i class="fas fa-chevron-down"></i>
          </div>
          
          <div class="subMenu" v-if="hoveredAssociacao">
            <router-link
              :to="{ name: 'Presidencia' }"
              @click="snapToElement('body')"
              >Presidência</router-link
            >
            <router-link
              :to="{ name: 'Gap' }"
              @click="snapToElement('body')"
              >Gabinete de Apoio à Presidencia</router-link
            >
            <router-link
              :to="{ name: 'Setores' }"
              @click="snapToElement('body')"
              >Setores</router-link
            >
            <router-link
              :to="{ name: 'Autonomas' }"
              @click="snapToElement('body')"
              >Secções Autónomas</router-link
            >
            <router-link
              :to="{ name: 'Assembleia' }"
              @click="snapToElement('body')"
              >Assembleia Magna</router-link
            >
            <router-link :to="{ name: 'Fiscal' }" @click="snapToElement('body')"
              >Conselho Fiscal</router-link
            >
          
            <router-link :to="{ name: 'Sobre' }" @click="snapToElement('body')"
              >Sobre nós</router-link
            >
            <router-link
              :to="{ name: 'Estatutos' }"
              @click="snapToElement('body')"
              >Estatutos</router-link
            >
            <router-link
              :to="{ name: 'GuiaEstudante' }"
              @click="snapToElement('body')"
              >Guia do Estudante</router-link
            >
          </div>
        </li>
        <li
          class="dropdown"
          @mouseover="hoveredPlataformas = true"
          @mouseleave="hoveredPlataformas = false"
        >
          <div class="text">
            <a class="navLinks dropdownName">Plataformas</a>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="subMenu" v-if="hoveredPlataformas">
            <a
              href="https://alojamento.aaue.pt/"
              target="_blank"
              rel="noopener noreferrer"
              >Portal do Alojamento</a
            >
            <a
              href="https://desporto.aaue.pt/"
              target="_blank"
              rel="noopener noreferrer"
              >Desporto</a
            >
          </div>
        </li>
        <li>
          <router-link
            class="navLinks"
            :to="{ name: 'Servicos' }"
            @click="snapToElement('body')"
            >Serviços</router-link
          >
        </li>
        <li>
          <router-link 
            class="navLinks"
            :to="{ name: 'Denuncias' }"
            @click="snapToElement('body')"
            >Denúncias</router-link
          >
        </li>
        <li>
          <router-link
            class="navLinks"
            :to="{ name: 'Contactos' }"
            @click="snapToElement('body')"
            >Contactos</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { snapToElement } from "@/functions/globals.js";
export default {
  name: "Navbar",
  data() {
    return {
      hoveredAssociacao: false,
      hoveredEventos: false,
      hoveredPlataformas: false,
      hoveredGapa: false,
      isAtTop: true,
      headerPosition: "relative",
    };
  },
  emits: ["isAtTop"],
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      window.pageYOffset >= 20 ? (this.isAtTop = false) : (this.isAtTop = true);
    },
    snapToElement,
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 130px;
  opacity: 1;
  color: #fff;
  padding: 0vh 75px;
  background-color: #f7f8fc;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 5px 11px 0 rgba(50, 50, 50, 0.164);

  #nav {
    display: flex;
    justify-content: space-between;
    .logo {
      a {
        opacity: 1;
        font-family: "Metropolis", sans-serif;
      }

      img {
        width: 200px;
        position: absolute;
        top: 25px;
        left: 75px;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }

    ul {
      display: flex;
      justify-content: space-around;

      li {
        padding: 20px 10px 10px 10px;
        font-size: 22px;

        a {
          font-weight: 400;
          color: #000000;

          &.router-link-exact-active {
            border-bottom: 1px solid black;
          }
        }
      }
    }
  }

  .dropdown .text {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      font-size: 16px;
      margin-left: 5px;
      opacity: 0.75;
      color: black;
      transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  .subMenu {
    background: white !important;

    a {
      background: transparent;
      color: black;
      font-size: 16px;
      font-weight: bold;
      opacity: 0;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

      &.router-link-exact-active {
        border-bottom: 2px solid black;
      }
    }
  }

  .dropdown:hover {
    .dropdownName {
      cursor: default;
    }

    i {
      transform: rotateX(180deg);
    }

    .subMenu {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 0px 20px 20px 20px;
      top: calc(100);
      width: max-content;
      border-radius: 16px 16px 16px 16px;

      a {
        padding: 20px 10px 0 0px;
        margin-bottom: 10px;
        color: black;
        opacity: 1;
      }
    }
  }
}

@media all and (min-width: 2000px) {
  .header #nav ul li {
    font-size: 26px;
  }
}

@media all and (min-width: 1000px) and (max-width: 1350px) {
  .header {
    padding: 0px 20px 0px 20px;
    height: 130px;
  }

  .header #nav .logo img {
    width: 120px;
    left: 75px;
    top: 40px;
  }
  .header #nav ul li {
    font-size: 17px;
  }
}

.isScrolled {
  height: 90px;

  #nav .logo img {
    width: 120px;
    left: 75px;
    top: 20px;
  }
}
</style>
