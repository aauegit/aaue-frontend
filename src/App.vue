<template>
  <router-view/>
</template>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  cursor: pointer;
  opacity: 0.75;
  color: white;
  transition: color 0.25s ease-in-out;
  
  &:hover {
    opacity: 1;
  }
}

nav, ul, li {
  list-style-type: none;
}

</style>
