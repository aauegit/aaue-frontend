<template>

  <header class="header">
    <nav id="nav">
      <div class="logo">
              <router-link class="logoName" to="/">
                  <img src="../assets/aaueLogo.png" alt="">
              </router-link>
          </div>
      <ul>
        <li><router-link class="navLinks" :to="{ name: 'Noticias' }">Notícias</router-link></li>
        <li><router-link class="navLinks" :to="{ name: 'Discursos' }">Discursos</router-link></li>
        <li class="dropdown" @mouseover="hoveredEventos = true" @mouseleave="hoveredEventos = false" >
          <div class="text">
            <a class="navLinks dropdownName">Eventos</a>
            <i class="fas fa-caret-down"></i>
          </div>
          <div class="subMenu" v-if="hoveredEventos">
             <a href="http://queima.aaue.pt/" target="_blank" rel="noopener noreferrer">Queima das Fitas</a>
              <a href="https://expoestudante.aaue.pt/#/" target="_blank" rel="noopener noreferrer">Expo'Estudante</a>
          </div>
        </li>
        <li class="dropdown" @mouseover="hoveredAssociacao = true" @mouseleave="hoveredAssociacao = false" >
          <div class="text">
            <a class="navLinks dropdownName">Associação</a>
            <i class="fas fa-caret-down"></i>
          </div>
          <div class="subMenu" v-if="hoveredAssociacao">
            <router-link :to="{ name: 'Presidencia'}">Presidência</router-link>
            <router-link :to="{ name: 'Assembleia'}">Assembleia Magna</router-link>
            <router-link :to="{ name: 'Fiscal'}">Conselho Fiscal</router-link>
            <router-link :to="{ name: 'Setores'}">Setores</router-link>
            <router-link :to="{ name: 'Autonomas'}">Secções Autónomas</router-link>
          </div>
        </li>
        <li class="dropdown" @mouseover="hoveredPlataformas = true" @mouseleave="hoveredPlataformas = false" >
          <div class="text">
            <a class="navLinks dropdownName">Plataformas</a>
            <i class="fas fa-caret-down"></i>
          </div>
          <div class="subMenu" v-if="hoveredPlataformas">
            <a href="https://alojamento.aaue.pt/" target="_blank" rel="noopener noreferrer">Portal do Alojamento</a>
            <a href="https://torneioreitor.aaue.pt/" target="_blank" rel="noopener noreferrer">Desporto</a>
          </div>
        </li>
        <li><router-link class="navLinks" :to="{ name: 'Servicos' }">Serviços</router-link></li>
        <li><router-link class="navLinks" :to="{ name: 'Contactos' }">Contactos</router-link></li>
      </ul>
	  </nav>
  </header>
    
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Navbar',
  data() {
    return { 
      hoveredAssociacao: false,
      hoveredEventos: false,
      hoveredPlataformas: false,
    }
  }
});
</script>

<style lang="scss">

.header {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
	z-index: 10;
	width: 100%;
  height: 15vh;
	opacity: 1;
	color: #fff;
	padding: 0vh 75px;
  background-color: #f7f8fc;

  #nav {
    display: flex;
    justify-content: space-between;
    .logo {

      a {
        opacity: 1;
        font-family: 'Metropolis', sans-serif;
      }

      img {

        width: 200px;
        position: absolute;
        top: 15px;
        left: 75px;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;

      li {
        padding: 10px;
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

  .dropdown .text{
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      margin-left: 5px;
      opacity: 0.75;
      color: black;
      transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
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
      transform: rotateZ(180deg);
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
    padding: 45px 20px 0px 20px;
  }

  .header #nav .logo img {
    left: 20px;
  }
  .header #nav ul li {
    font-size: 17px;
  }
}
</style>