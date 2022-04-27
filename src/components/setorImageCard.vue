<template>
  <div class="coordenador">
    <img :src="coordenadorImg" alt="Coordenador" decode="async" />
    <h1>{{ coordenadorNome }}</h1>
    <h2>{{ coordenadorCargo }}</h2>
  </div>
</template>

<script>
export default {
  name: "setorImageCard",
  props: {
    coordenadorImg: {
      type: String,
      required: true,
    },
    coordenadorNome: {
      type: String,
      required: true,
    },
    coordenadorCargo: {
      type: String,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped>
.coordenador {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
  max-width: 280px;
  border-radius: 25px;
  margin: 20px;
  padding: 0 25px 25px 25px;

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
    max-width: 280px;
    border-radius: 12px 12px 0 0;
  }

  a {
    margin-top: 20px;
  }

  i {
    font-size: 20px;
  }
}

@media (max-width: 1430px) {
  .coordenador {
    padding: 0 15px 15px 15px;
    max-width: 240px;

    img {
      max-width: 240px;
    }
  }
}
@media (max-width: 710px) {
  .coordenador {
    padding: 0 10px 10px 10px;
    max-width: 180px;

    img {
      max-width: 180px;
    }
  }
}

@media (max-width: 470px) {
  .coordenador {
    padding: 0 10px 10px 10px;
    max-width: 250px;

    img {
      max-width: 250px;
    }
  }
}
</style>