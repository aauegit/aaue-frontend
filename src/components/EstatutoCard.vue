<template>
  <div class="estatutoCard">
    <i class="topIcon" :class="icon"></i>
    <h2>{{ nome }}</h2>
    <Button>
      <!--  <a :href="getImgURL(ficheiro)" download></a> -->
      <i class="fas fa-download"></i>
      <span>Download</span>
    </Button>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { getImgURL } from "@/functions/globals.js";
export default {
  components: {
    Button,
  },
  props: {
    nome: {
      type: String,
    },
    icon: {
      type: String,
    },
    ficheiro: {
      type: String,
    },
  },

  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss" scoped>
.estatutoCard {
  width: 400px;
  padding: 20px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transition: box-shadow 0.2s cubic-bezier(0.79, 0.21, 0.06, 0.81);
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;

  .topIcon {
    font-size: 30px;
  }

  h2 {
    margin: 20px 0;
  }

  .fa-download {
    margin-right: 10px;
  }
}
</style>
