<template>
    <router-link to="/" class="noticiaCard">
        <img :src="imgURL" alt="">
        <div class="contentPreview">
            <h1 class="title">{{ titulo }}</h1>
            <hr>
            <h2 class="publishedOn">Publicado a <span class="data">{{ data }}</span></h2>
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
    padding: 40px;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    transition:box-shadow 0.3s cubic-bezier(.79,.21,.06,.81);

    &:hover {
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001;
    }

    &:hover > img,
    &:hover > .contentPreview {
        transform: scale(1.01);

        hr {
            transform: scale(0.99);
        }
    }



    img {
        transition: all 0.3s cubic-bezier(.79,.21,.06,.81);
        border-radius: 18px;
        width: 300px;
    }

    .contentPreview {
        justify-content: center;
        align-items: center;
        width: 300px;
        transition: all 0.3s cubic-bezier(.79,.21,.06,.81);

        h1 {
            font-size: 20px;
            margin: 10px 0;
        }

        hr {
            margin: auto;
            width: 80%;
        }

        .publishedOn {
            font-size: 16px;
            margin: 10px 0;
        }

        .textPreview {
            font-size: 16px;

            span {
                color: red;
            }
        }
    }
}
</style>