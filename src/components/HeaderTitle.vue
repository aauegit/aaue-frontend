<template>
  <div class="headerTitle" :style="{ background: headerImage }">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
    <p v-if="subtitle2">{{ subtitle2 }}</p>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    subtitle2: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    headerImage() {
      return `url(${this.image}) no-repeat center center`;
    },
  },
};
</script>

<style lang="scss" scoped>
.headerTitle {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  padding-top: 12vh;
  padding-bottom: 5vh;
  padding-left: 75px;
  color: white;
  text-transform: uppercase;

  h1 {
    font-size: 80px;
    border-radius: 2px;
    margin-bottom: 20px;
    border-bottom: 5px solid white;
    width: 90%;
  }

  p {
    margin: 0;
    font-size: 25px;

    &:nth-child(3) {
      margin-bottom: 2vh;
    }
  }
}

@media (max-width: 1600px) {
  .headerTitle {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 20px;
    }
  }
}

@media (max-width: 780px) {
  .headerTitle {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media (max-width: 500px) {
  .headerTitle {
    padding-left: 20px;
    padding-right: 20px;

    h1 {
      font-size: 37px;
    }

    p {
      font-size: 16px;
    }
  }
}
</style>
