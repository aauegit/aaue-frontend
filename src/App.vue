<template>
  <router-view/>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");
$specialColor: #155781;

@font-face {
  font-family: "Metropolis";
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: local("Metropolis"),
  url('@/assets/font/metropolis/Metropolis-Regular.otf') format("opentype");
}

@font-face {
  font-family: "Metropolis";
  font-weight: bold;
  font-style: normal;
  font-display: swap;
  src: local("Metropolis"),
  url('@/assets/font/metropolis/Metropolis-Bold.otf') format("opentype");
}

#app {
  font-family: 'Metropolis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f7f8fc;
  cursor: default;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {

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
}

a {
  text-decoration: none;
  cursor: pointer;
  opacity: 0.75;
  color: #2c3e50;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  
  &:hover {
    opacity: 1;
  }
}

p {
  hyphens: auto;
}

nav, ul, li {
  list-style-type: none;
}

hr {
  width: 100px;
  background: $specialColor;
  border: 1px solid $specialColor;
  margin: 5px 0px;
}

</style>
