<template>
    <button @click="recaptcha">Execute recaptcha</button>
</template>

<script>
import { createApp } from 'vue'
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

const component = {
  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

    const recaptcha = async () => {
      // (optional) Wait until recaptcha has been loaded.
      await recaptchaLoaded()

      // Execute reCAPTCHA with action "login".
      const token = await executeRecaptcha('login')

      // Do stuff with the received token.
    }

    return {
      recaptcha
    }
  },
  template: '<button @click="recaptcha">Execute recaptcha</button>'
}

createApp(component)
  .use(VueReCaptcha, { siteKey: '<site key>' })
</script>

<style lang="scss" scoped>

</style>