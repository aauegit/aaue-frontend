<template>

  <header class="header">
    <nav id="nav">
		<div class="logo">
            <router-link class="logoName" to="/">
                <img src="../assets/aaueLogo.png" alt="">
            </router-link>
        </div>
		<ul>
			<li><router-link class="navLinks" to="/">Home</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Noticias' }">Noticias</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Discursos' }">Discursos</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Eventos' }">Eventos</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Associacao' }">Associação</router-link></li>
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
});
</script>

<style lang="scss">

.header {
  position: absolute;
	z-index: 10;
	width: 100%;
	opacity: 1;
	color: #fff;
	padding: 35px 100px 0;

  #nav {
    display: flex;
    justify-content: space-between;

    .logo {
      
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;

      li {
        padding: 10px;
        font-size: 24px;

        a {
          font-weight: bold;
          color: #000000;

          &.router-link-exact-active {
            border-bottom: 1px solid black;
          }
        }  
      }
    }
  }
}
</style>