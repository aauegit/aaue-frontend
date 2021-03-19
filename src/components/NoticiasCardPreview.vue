<template>
    <div class="cardPreview">
        <img :src="imgURL" alt="">
        <div class="contentPreview">
            <h1 class="title"><router-link to="/">{{ titulo }}</router-link></h1>
            <hr>
            <h2 class="publishedOn">Publicado a <span class="data">{{ data }}</span></h2>
            <p class="textPreview"> {{textPreview }} <router-link to="/">{...}</router-link></p>
        </div>
    </div>
  
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
            required: true,
        },
    }
});
</script>

<style lang="scss">

.cardPreview {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin-bottom: 80px;

    img {
        width: 300px;
        margin-right: 25px;
    }

    .contentPreview {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 200px;


        .title {
    
        }

        .publishedOn {
            font-size: 1.1rem;
            margin-bottom: 20px;
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