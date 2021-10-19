<template>
    <section class="notfound">
        <h1>Erro 404</h1>
        <p>Oops! Encontraste uma página que não existe.</p>
        <Button buttonText="Voltar à homepage" >
            <router-link class="routerLink" to="/"></router-link>
        </Button>
    </section>
</template>

<script>
import Button from '@/components/Button.vue'
    export default {
        components: {
            Button,
        },
    }
</script>

<style lang="scss" scoped>


.notfound {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 100px;
    }

    p {
        margin: 10px 0 30px 0;
    }

    .routerLink {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 25px;
        width: 100%;
        height: 100%;
    }
}
</style>