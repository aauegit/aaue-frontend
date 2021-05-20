<template>
    <div class="setor">
        <div class="infoSetor">
            <div class="textSetor">
                <h1>{{ nomeDoSetor }}</h1>
                <hr>
                <div class="coordenadores">
                    <div class="coordenador">
                        <img :src="coordenador1Img" alt="Coordenador" lazy="load" decode="async">
                        <a :href="fb1" target="_blank">{{ coordenador1 }}</a>
                    </div>
                    <div class="coordenador">
                        <img :src="coordenador2Img" alt="Coordenador" lazy="load" decode="async">
                        <a :href="fb2" target="_blank">{{ coordenador2 }}</a>
                    </div>
                    <div v-if="coordenador3" class="coordenador">
                        <img :src="coordenador3Img" alt="Coordenador" lazy="load" decode="async">
                        <a :href="fb3" target="_blank">{{ coordenador3 }}</a>
                    </div>
                    <div v-if="coordenador4" class="coordenador">
                        <img :src="coordenador4Img" alt="Coordenador" lazy="load" decode="async">
                        <a :href="fb4" target="_blank">{{ coordenador4 }}</a>
                    </div>
                </div>
                <p>{{ descricao }}</p>
                <h2>Contacto: <span>{{ contacto }}</span></h2>
            </div>
        </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Setor',
  props: {
    nomeDoSetor: String,
    coordenador1: String,
    coordenador1Img: String,
    fb1: String,
    coordenador2: String,
    coordenador2Img: String,
    fb2: String,
    coordenador3: String,
    coordenador3Img: String,
    fb3: String,
    coordenador4: String,
    coordenador4Img: String,
    fb4: String,
    descricao: String,
    contacto: String,
  }
});
</script>

<style lang="scss" scoped>

.setor {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-top: 150px;


    .infoSetor {
        display: flex;
        justify-content: center;
        width: 100%;

        hr {
            margin-bottom: 20px;
        }

        .coordenadores {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
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
                color: #e96656;
            }
        }

        

        .textSetor {
            text-align: justify;
            margin-right: 110px;

            p {
                margin: 30px 0 30px 0;
                font-size: 20px;
            }

            h2 {
                font-size: 20px;
            }

            span {
                font-weight: 100;
            }
        }
        
    }
}

</style>