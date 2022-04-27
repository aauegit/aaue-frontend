<template>
  <div class="presidencia">
    <h1>Mesa da Assembleia Magna</h1>
    <hr />
    <transition-group appear          
            @before-enter="beforeEnter"
            @enter="enter" 
            tag="div" 
     class="membros">
      <MembroDirecao
        id="membro"
        v-for="(membro, index) in membros"
        :key="membro.id"
        :data-index="index"
        :img="getImgURL(membro.img)"
        :nome="membro.nome"
        :cargo="membro.cargo"
      />
    </transition-group>
  </div>
</template>

<script>
import MembroDirecao from "@/components/MembroDirecao.vue";
import { getImgURL } from "@/functions/globals.js";
import assembleiaMagna from "@/static/assembleiaMagna.json";
import gsap from 'gsap';

export default {
  name: "Assembleia",
  setup() {
    const beforeEnter = (el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateX(-50px)';
    }
    const enter = (el, done) => {
        gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.2,
            onComplete: done,
            delay: el.dataset.index * 0.1,
        });
    }
        return { beforeEnter, enter }
  },
  data() {
    return {
      membros: assembleiaMagna,
    };
  },
  components: {
    MembroDirecao,
  },
  methods: {
    getImgURL,
  },
};
</script>

<style lang="scss" scoped>
.presidencia {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 75px;

  h1,
  hr {
    margin-left: 5px;
  }

  h1 {
    font-size: 30px;
  }
}

.membros {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 0px;

  #membro {
    flex: 0 0 20%;
  }
}

@media (max-width: 1016px) {
  .presidencia {
    padding-top: 100px;
  }
}
@media (max-width: 710px) {
  .presidencia {
    padding: 100px 10px 10px 10px;
  }
}
</style>
