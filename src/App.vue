<template>
  <router-view/>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

$specialColor: #155781;

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f7f7f7;
  
}

html {
  font-family: 'Poppins', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f7f7f7;
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
