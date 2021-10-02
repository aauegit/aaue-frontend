<template>
    <div>
        <h1></h1>
        <img src="" alt="">
        <p v-for="paragraph in paragraphs" :key="paragraph"></p>

    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>