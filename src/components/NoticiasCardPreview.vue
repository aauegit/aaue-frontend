<template>
  <router-link
    :to="route"
    class="cardPreview"
    @click="snapToElement('.headerTitle')"
  >
    <img :src="imgURL" alt="" />
    <div class="contentPreview">
      <h1>
        {{ titulo }}
      </h1>
      <hr :style="{ borderColor: categoryColor }" />
      <h2 class="publishedOn">
        Publicado a <span class="data">{{ data }}</span>
      </h2>
      <p class="textPreview">{{ textPreview }} <span>{...}</span></p>
    </div>
  </router-link>
</template>

<script>
import { snapToElement } from "@/functions/globals.js";
export default {
  name: "NoticiasCardPreview",
  props: {
    postID: {
      type: String,
      required: true,
    },
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
    categoryColor: {
      type: String,
      required: true,
    },
    textPreview: {
      type: String,
    },
  },
  computed: {
    route() {
      return `/noticias/${this.postID}`;
    },
  },
  methods: {
    snapToElement,
  },
};
</script>

<style lang="scss">
.cardPreview {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 80vw;
  margin: 0px 30px 50px 0px;
  border-radius: 18px;
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
    /* width: 300px; */
    height: 150px;
    margin-right: 25px;
    transition: all 0.2s ease-in;
    float: left;
    shape-outside: border-box;
  }

  .contentPreview {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px 25px 25px 0;
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
      width: 200px;
      border: 1px solid;
      margin: 5px 0px;
    }

    a {
      color: black;
    }

    p {
      text-align: justify;
    }
  }
}
</style>
