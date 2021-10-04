<template>
  <router-link to="/" class="cardPreview">
    <img :src="imgURL" alt="" />
    <div class="contentPreview">
      <h1>
        <router-link to="/" class="title">{{ titulo }}</router-link>
      </h1>
      <hr />
      <h2 class="publishedOn">
        Publicado a <span class="data">{{ data }}</span>
      </h2>
      <p class="textPreview">{{ textPreview }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "DiscursoCardPreview",
  props: {
    imgURL: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    textPreview: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.cardPreview {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 900px;
  margin: 0px 30px 30px 0px;
  border-radius: 18px;
  padding: 36px;
  opacity: 1;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001;
  }

  img {
    border-radius: 12px;
    width: 200px;
    height: 200px;
    margin-right: 25px;
    transition: all 0.2s ease-in;
  }

  .contentPreview {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 200px;
    transition: all 0.2s ease-in;

    .title {
      opacity: 1;
    }

    .publishedOn {
      font-size: 1.1rem;
      margin-bottom: 20px;

      .data {
        opacity: 0.5;
      }
    }

    hr {
      width: 100px;
      background: red;
      border: 1px solid red;
      margin: 5px 0px;
    }

    a {
      color: black;
    }
  }
}
</style>
