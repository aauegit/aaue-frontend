<template>
    <router-link class="equipaCard" :to="{name: destination}">
        <i :class="icon"></i>
        <p>{{ name }}</p>
    </router-link>
</template>

<script>
export default {
    name: 'EquipaCard',
    props: {
        destination: String,
        icon: String,
        name: String
    }
}
</script>

<style lang="scss" scoped>

.equipaCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 100px;
    margin: 10px;
    box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001,
        inset 0px 0px 0px 0px #fff9,
        inset 0px 0px 0px 0px #0001;
    border-radius: 12px;
    
    i {
        font-size: 30px;
        margin-bottom: 10px;
    }

    p {
        font-size: 20px;
    }
}

</style>