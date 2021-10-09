<template>
  <div class="membro">
    <img :src="img" alt="" />
    <h1>{{ nome }}</h1>
    <h2>{{ cargo }}</h2>
    <a :href="fb" target="_blank" rel="noopenner noreferrer"
      ><i class="fab fa-facebook-square"></i
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    nome: String,
    cargo: String,
    fb: String,
  },
};
</script>

<style lang="scss" scoped>
.membro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
  max-width: 350px;
  border-radius: 25px;

  margin: 20px;
  padding: 25px;

  h1 {
    margin-top: 20px;
    font-size: 24px;
  }

  h2 {
    margin-top: 5px;
    font-size: 1em;
    opacity: 0.5;
  }

  img {
    width: 250px;
    border-radius: 12.5px;
  }

  a {
    margin-top: 20px;
  }

  i {
    font-size: 20px;
  }
}
</style>
