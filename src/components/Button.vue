<template>
  <button class="button">
    {{ buttonText }}
    <slot></slot>
    <a v-if="link" :href="link" rel="noreferrer nooppener" target="_blank"></a>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String,
    link: String,
  },
};
</script>

<style scoped lang="scss">
$whiteBlue: #e7ecef;
$darkBlue: #274c77;
$normalBlue: #6aa7cf;
$lightBlue: #a3cef1;
$easing: cubic-bezier(0.39, 1.61, 0.89, 1.22);
$fastEasing: cubic-bezier(0.075, 0.82, 0.165, 1);

button {
  padding: 15px 20px;
  border: 0;
  outline: 0;
  border-radius: 25px;
  box-shadow: rgba(83, 83, 83, 0.35) 0px 5px 10px;
  text-transform: uppercase;
  font-family: "Metropolis", sans-serif;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:nth-child(2) {
    margin-left: 30px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  a {
    opacity: 1;
  }
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
