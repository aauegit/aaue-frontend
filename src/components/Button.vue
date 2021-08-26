<template>
  <button  class="button" >{{buttonText}}
      <a v-if="link" :href="link" rel="noreferrer nooppener" target="_blank"></a>
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonText: String,
        link: String,
    }
}
</script>

<style scoped lang="scss">
$whiteBlue: #E7ECEF;
$darkBlue: #274C77;
$normalBlue: #6aa7cf;
$lightBlue: #A3CEF1;
$easing: cubic-bezier(0.39, 1.61, 0.89, 1.22);
$fastEasing: cubic-bezier(0.075, 0.82, 0.165, 1);

.button {
    position: relative;
    display: inline-block;
    color: $whiteBlue;
    background-color: $darkBlue;
    border: 1px solid $normalBlue;
    outline: none;
    padding: 15px 30px;
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    opacity: 1;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s $fastEasing;
    &:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0px 2px 10px 0px rgba($color: #000000, $alpha: 0.25);
    }
    a {
        position: absolute;
        width: 155px;
        height: 60px;
        right: 0;
        bottom: 0;
    }
}
.lastButton {
    margin-left: 30px;
    color: $darkBlue;
    background-color: $whiteBlue;
    border: 1px solid $darkBlue;
}
@media (max-width: 450px) {
    .button {
        padding: 15px;
    }
}
@media (max-width: 350px) {
    .button {
        padding: 8px;
    }
}
</style>