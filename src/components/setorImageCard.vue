<template>
  <div class="coordenador">
    <img :src="coordenadorImg" alt="Coordenador" decode="async" />
    <a :href="fb" target="_blank" rel="noopener noreferrer"
      >{{ coordenadorNome }} <i class="fab fa-facebook-square"></i
    ></a>
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
    fb: {
      type: String,
      required: true,
    },
    coordenadorNome: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$specialColor: #155781;
.coordenador {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 270px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
  }

  a {
    font-weight: bold;
    color: $specialColor;
  }
}
</style>
