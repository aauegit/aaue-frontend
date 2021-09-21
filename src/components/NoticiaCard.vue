<template>
    <router-link to="/" class="noticiaCard">
        <img :src="imgURL" alt="">
        <div class="contentPreview">
            <h2 class="publishedOn">Publicado a <span class="data">{{ data }}</span></h2>
            <h1 class="title">{{ titulo }}</h1>
            <hr>
            <p class="textPreview"> {{textPreview }} <span>{...}</span></p>
        </div>
    </router-link>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NoticiaCard',
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
            required: true,
        },
    }
});
</script>

<style lang="scss" scoped>

.noticiaCard {
    opacity: 1;
    margin: 30px 10px 10px 30px;
    display: flex;
    flex-direction: column;
    transition:box-shadow 0.3s cubic-bezier(.79,.21,.06,.81);
    background-color: #1d1d1d;
    img {
        transition: all 0.3s cubic-bezier(.79,.21,.06,.81);
        max-width: 300px;
    }

    .contentPreview {
        justify-content: center;
        align-items: center;
        padding: 20px;
        max-width: 300px;
        color: #f7f8fc;
        transition: all 0.3s cubic-bezier(.79,.21,.06,.81);

        h1 {
            font-size: 20px;
            margin: 10px 0;
            font-weight: 500;
        }

        hr {
            width: 100%;
            margin: 10px 0;
        }

        .publishedOn {
            font-size: 12px;
            margin: 5px 0;
            opacity: 0.5;
        }

        .textPreview {
            font-size: 15px;
            font-weight: 300;
            opacity: 0.9;

            span {
                color: grey;
            }
        }
    }
}
</style>