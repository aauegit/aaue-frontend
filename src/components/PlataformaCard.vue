<template>
  <a :href="link" target="_blank" class="plataformaCard">
    <i :class="icon" alt=""></i>
    <div class="contentPreview">
      <h1 class="title">{{ titulo }}</h1>
      <p class="textPreview">{{ text }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "PlataformaCard",
  props: {
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.plataformaCard {
  position: relative;
  opacity: 1;
  margin: 30px 10px 10px 30px;
  padding: 30px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s cubic-bezier(0.79, 0.21, 0.06, 0.81);
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;

  i {
    position: absolute;
    top: -30px;
    left: 20px;
    padding: 10px;
    border-radius: 50%;
    background-color: #f7f8fc;
    font-size: 40px;
    color: #f7ce31;
  }

  .contentPreview {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    max-width: 300px;
    transition: all 0.2s cubic-bezier(0.79, 0.21, 0.06, 0.81);

    h1 {
      font-size: 20px;
      margin: 10px 0;
    }

    .textPreview {
      text-align: left;
      font-size: 16px;
    }
  }
}

.reitorCard:hover {
  border: 2px solid #f7ce31;
  i {
    display: block;
    animation-duration: 4s;
    animation-iteration-count: 1;
    animation-name: rotate;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 1250px) {
  .plataformaCard {
    flex: 0 0 40%;
  }
}

@media (max-width: 805px) {
  .plataformaCard {
    .contentPreview {
      max-width: 250px;
      width: 200px;
      min-width: 200px;
    }
  }
}

@media (max-width: 600px) {
  .plataformaCard {
    margin: 50px 10px 10px 10px;
    .contentPreview {
      max-width: 70vw;
      width: 70vw;
      min-width: 200px;
    }
  }
}
</style>
