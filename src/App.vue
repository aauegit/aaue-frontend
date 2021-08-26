<template>
  <router-view/>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
$specialColor: #155781;

#app {
  font-family: 'Roboto', sans-serif;
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
