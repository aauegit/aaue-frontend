<template>
  <div class="cardPreviewLoading">
    <div class="imageLoading"></div>
    <div class="contentPreview">
      <h1 class="title"></h1>
      <h1 class="title2"></h1>
      <hr />
      <h2 class="publishedOn"></h2>
      <p class="textPreviewNoticia"></p>
      <p class="textPreviewNoticia textPreviewNoticia2"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticiasCardPreviewLoading",
};
</script>

<style lang="scss">
$loadingColor: #6d6d6d;

@keyframes blink {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.8;
  }
}

.cardPreviewLoading {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 80vw;
  margin: 0px 30px 50px 0px;
  border-radius: 18px;
  opacity: 1;

  .imageLoading {
    border-radius: 12px;
    height: 200px;
    min-width: 250px;
    max-width: 250px;
    margin-right: 25px;
    background-color: $loadingColor;
    animation: blink 2s ease alternate infinite;
    float: left;
    shape-outside: border-box;
  }

  .contentPreview {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px 0px 25px 0;

    .title {
      opacity: 1;
      width: 63vw;
      height: 15px;
      border-radius: 25px;
      background-color: $loadingColor;
      animation: blink 1.5s ease alternate infinite;
    }
    .title2 {
      opacity: 1;
      margin-top: 10px;
      width: 250px;
      height: 15px;
      border-radius: 25px;
      background-color: $loadingColor;
      animation: blink 1.5s ease alternate infinite;
    }

    .publishedOn {
      width: 250px;
      height: 10px;
      border-radius: 25px;
      margin-bottom: 30px;
      background-color: $loadingColor;
      animation: blink 1.5s ease alternate infinite;

      .data {
        opacity: 0.5;
      }
    }

    hr {
      width: 200px;
      border: 1px solid $loadingColor;
      margin: 5px 0px;
      animation: blink 1.5s ease alternate infinite;
    }

    .textPreviewNoticia {
      width: 63vw;
      height: 8px;
      border-radius: 25px;
      background-color: $loadingColor;
      animation: blink 1.5s ease alternate infinite;
    }

    .textPreviewNoticia2 {
      margin-top: 5px;
      animation: blink 1.5s ease alternate infinite;
    }
  }
}

@media (max-width: 1750px) {
  .cardPreviewLoading {
    .contentPreview {
      .title {
        width: 55vw;
      }

      .textPreviewNoticia {
        width: 55vw;
      }
    }
  }
}
@media (max-width: 1500px) {
  .cardPreviewLoading {
    .contentPreview {
      .title {
        width: 50vw;
      }

      .textPreviewNoticia {
        width: 50vw;
      }
    }
  }
}
@media (max-width: 1300px) {
  .cardPreviewLoading {
    .contentPreview {
      .title {
        width: 45vw;
      }

      .textPreviewNoticia {
        width: 45vw;
      }
    }
  }
}
@media (max-width: 1200px) {
  .cardPreviewLoading {
    .contentPreview {
      .title {
        width: 40vw;
      }

      .textPreviewNoticia {
        width: 40vw;
      }
    }
  }
}

@media (max-width: 1080px) {
  .cardPreviewLoading {
    .contentPreview {
      .title {
        width: 36vw;
      }

      .textPreviewNoticia {
        width: 36vw;
      }
    }
  }
}

@media (max-width: 1016px) {
  .cardPreviewLoading {
    margin-right: 0;

    .contentPreview {
      .title {
        display: block;
        width: 100%;
      }

      .textPreviewNoticia {
        width: 60vw;
      }
    }
  }
}

@media (max-width: 700px) {
  .cardPreviewLoading {
    flex-direction: column;
    min-width: 100%;

    &:hover {
      box-shadow: none;
    }

    .imageLoading {
      min-width: 80%;
      margin-right: 0;
    }

    .contentPreview {
      width: 80%;

      .textPreviewNoticia {
        width: 100%;
      }
      .textPreviewNoticia2 {
        width: 70%;
      }
    }
  }
}
@media (max-width: 500px) {
  .cardPreviewLoading {
    flex-direction: column;
    min-width: 100%;

    &:hover {
      box-shadow: none;
    }

    .imageLoading {
      min-width: 100%;
      margin-right: 0;
    }

    .contentPreview {
      width: 100%;

      .textPreviewNoticia {
        width: 100%;
      }
      .textPreviewNoticia2 {
        width: 70%;
      }
    }
  }
}
</style>
