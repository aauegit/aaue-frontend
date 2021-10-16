<template>
  <div>
    <span class="days"></span>
    <span class="hours"></span>
    <span class="minutes"></span>
    <span class="seconds"></span>
  </div>
</template>

<script setup>
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let timeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

let totalSeconds;

function init() {
  totalSeconds = Math.floor((new Date("27.10.2021") - new Date()) / 1000);
  let interval = setInterval(() => {
    if (totalSeconds < 0) {
      clearInterval(interval);
    }
  }, 1000);
}
</script>

<style lang="scss" scoped></style>
