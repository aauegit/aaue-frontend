<template>
  <router-link :to="route" class="noticiaCard" @click="snapToElement('body')">
    <img :src="imgURL" alt="" />
    <div class="contentPreview">
      <h2 class="publishedOn">
        Publicado a <span class="data">{{ data }}</span>
      </h2>
      <h1 class="title">{{ titulo }}</h1>
      <hr :style="{ borderColor: categoryColor }" />
      <p class="textPreviewNoticia">{{ textPreview }}</p>
      <p :style="{ color: categoryColor }" class="verMais">
        Ver mais
        <i :style="{ color: categoryColor }" class="fas fa-arrow-right"></i>
      </p>
    </div>
  </router-link>
</template>

<script>
import { snapToElement } from "@/functions/globals.js";
export default {
  name: "NoticiaCard",
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
      required: true,
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
  mounted() {
    const textElements = document.querySelectorAll(".textPreviewNoticia");

    for (let element of textElements) {
      const LIMIT = 300;
      const dotsOrEmpty = element.innerText.length > LIMIT ? "..." : "";
      element.innerText = element.innerText.substring(0, LIMIT) + dotsOrEmpty;
    }
  },
};
</script>

<style lang="scss" scoped>
.noticiaCard {
  opacity: 1;
  margin: 30px 10px 10px 30px;
  display: flex;
  flex-direction: column;
  height: 550px;
  box-shadow: 5px 5px 20px rgb(160, 168, 189);
  border-radius: 12px;

  img {
    transition: all 0.3s cubic-bezier(0.79, 0.21, 0.06, 0.81);
    width: 350px;
    height: 200px;
    border-radius: 12px 12px 0 0;
  }

  .contentPreview {
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 15px 25px 35px 25px;
    max-width: 350px;
    height: 100%;
    color: black;
    transition: all 0.3s cubic-bezier(0.79, 0.21, 0.06, 0.81);

    h1 {
      font-size: 20px;
      margin: 10px 0;
      font-weight: 500;
    }

    hr {
      width: 100%;
      margin: 10px 0;
      border: 1px solid;
    }

    .publishedOn {
      font-size: 12px;
      margin: 5px 0;
      opacity: 0.5;
    }

    .textPreviewNoticia {
      font-size: 15px;
      font-weight: 300;
      opacity: 0.9;
      hyphens: auto;
    }

    .verMais {
      position: absolute;
      opacity: 1;
      display: flex;
      bottom: 30px;
      right: 25px;

      i {
        margin-left: 5px;
      }
    }
  }
}
</style>
