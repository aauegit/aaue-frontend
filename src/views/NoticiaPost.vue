<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>Publicado a {{ date }}</h2>
        <img src="" alt="">
        <p v-for="paragraph in paragraphs" :key="paragraph"></p>
        <p>{{ signature }}</p>

    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
            },
            date: {
                type: String,
            },
            imgUrl: {
                type: String,
            },
            paragraphs: {
                type: Array,
            },
            signature: {
                type: String,
            },
        },

    }
</script>

<style lang="scss" scoped>

</style>