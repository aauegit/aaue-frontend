<template>
    <a :href="link" target="_blank" class="plataformaCard">
        <i :class="icon" alt=""></i>
        <div class="contentPreview">
            <h1 class="title">{{ titulo }}</h1>
            <p class="textPreview"> {{text }}</p>
        </div>
    </a>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PlataformaCard',
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
    }
});
</script>

<style lang="scss" scoped>

.plataformaCard {
    opacity: 1;
    margin: 30px 10px 10px 30px;
    padding: 30px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition:box-shadow 0.2s cubic-bezier(.79,.21,.06,.81);

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

    &:hover > .contentPreview {
        transform: scale(1.01);

        hr {
            transform: scale(0.99);
        }
    }

    i {
        font-size: 40px;
        color: #d80b0b;
    }

    .contentPreview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        transition: all 0.2s cubic-bezier(.79,.21,.06,.81);

        h1 {
            font-size: 20px;
            margin: 10px 0;
        }

        .textPreview {
            text-align: justify;
            font-size: 16px;
        }
    }
}
</style>