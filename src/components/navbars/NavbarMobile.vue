<template>
  <nav class="mobileNav">
    <transition-group
      v-if="isActive"
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      class="navLinks"
      :class="isActive"
    >
      <li
        v-for="(navlink, index) in navLinks"
        :key="navlink.id"
        :data-index="index"
      >
        <router-link :to="{ name: navlink.routeName }">
          {{ navlink.routeText }}</router-link
        >
      </li>
    </transition-group>

    <div class="burger" @click="toggleClass()">
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
import gsap from "gsap";
export default {
  setup() {
    const navLinks = [
      { id: 0, routeName: "Home", routeText: "Home" },
      { id: 1, routeName: "Noticias", routeText: "Noticias" },
      /* { id: 2, routeName: "Discursos", routeText: "Discursos" }, */
      { id: 5, routeName: "Servicos", routeText: "Serviços" },
      { id: 6, routeName: "Contactos", routeText: "Contactos" },
    ];
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(-100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.2,
        onComplete: done,
        delay: el.dataset.index * 0.05,
      });
    };
    return { navLinks, beforeEnter, enter };
  },
  name: "MobileNav",
  data() {
    return {
      toggle: false,
      newClass: "",
      isActive: "",
    };
  },
  methods: {
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
  position: fixed;
  z-index: 10;
  width: 100%;
  opacity: 1;
  color: #000;
  padding: 35px 100px;
  background-color: #f7f8fc;
  box-shadow: 0 5px 11px 0 rgba(50, 50, 50, 0.164);
  .navLinks {
    position: absolute;
    right: 0px;
    height: 100vh;
    top: 0vh;
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
      font-size: 20px;
      text-transform: uppercase;

      a {
        color: white;
      }
    }
  }

  .isActive {
    position: fixed;
    transform: translateX(0%);
    display: flex;
    opacity: 1;
  }
  .burger {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: fixed;
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
