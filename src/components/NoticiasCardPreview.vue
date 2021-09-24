<template>
    <router-link to="/" class="cardPreview">
        <img :src="imgURL" alt="">
        <div class="contentPreview">
            <h1 ><router-link to="/" class="title">{{ titulo }}</router-link></h1>
            <hr>
            <h2 class="publishedOn">Publicado a <span class="data">{{ data }}</span></h2>
            <p class="textPreview"> {{textPreview }} <router-link to="/">{...}</router-link></p>
        </div>
    </router-link>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NoticiasCardPreview',
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
        },
    }
});
</script>

<style lang="scss">

.cardPreview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80vw;
    margin:0px 30px 50px 0px;
    border-radius: 18px;
    opacity: 1;
    transition: all 0.2s ease-in;

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

    img {
        border-radius: 12px;
        width: 300px;
        height: 100%;
        margin-right: 25px;
        transition: all 0.2s ease-in;
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
            width: 100px;
            background: red;
            border: 1px solid red;
            margin: 5px 0px;
        }

        a {
            color: black;
        }
    }
}


</style>