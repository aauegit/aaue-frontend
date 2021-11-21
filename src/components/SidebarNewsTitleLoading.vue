<template>
  <li class="titleContainer">
    <div class="textLoading firstLine"></div>
    <div class="textLoading middleLine"></div>
    <div class="textLoading lastLine"></div>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$loadingColor: #6d6d6d;

@keyframes blink {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.8;
  }
}

.titleContainer {
  margin: 20px;
  max-width: 200px;
  list-style: disc outside none !important;

  .textLoading {
    width: 200px;
    height: 10px;
    background-color: $loadingColor;
    border-radius: 25px;
    margin-top: 5px;
    animation: blink 1.5s ease alternate infinite;
  }

  .firstLine::before {
    content: "\200B";
  }

  .lastLine {
    width: 100px;
  }
}

@media (max-width: 1015px) {
  .titleContainer {
    .textLoading {
      width: 80vw;
    }

    .middleLine {
      display: none;
    }

    .lastLine {
      width: 40vw;
    }
  }
}
</style>
