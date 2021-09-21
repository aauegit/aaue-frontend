<template>
    <router-link class="equipaCard" :to="{name: destination}">
        <i :class="icon" :style="{color: iconColor}"></i>
        <p>{{ name }}</p>
    </router-link>
</template>

<script>
export default {
    name: 'EquipaCard',
    props: {
        destination: String,
        icon: String,
        name: String,
        iconColor: String,
    }
}
</script>

<style lang="scss" scoped>

.equipaCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 250px;
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
    flex: 0 0 25%;;
    
    i {
        font-size: 30px;
        margin-bottom: 10px;
    }

    p {
        font-size: 20px;
    }
}

@media (max-width: 650px) {
    .equipaCard {
        flex: 0 0 20%;
        min-width: 200px;
    }
}
@media (max-width: 550px) {
    .equipaCard {
        flex: 0 0 10%;
    }
}
@media (max-width: 550px) {
    .equipaCard {
        flex: 0 0 80%;
    }
}

</style>