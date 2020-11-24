<template>
  <div>
    <transition mode="out-in" name="fade">
      <soundcontrol key="1" v-if="sound" />
      <SpeakerIcon
        v-if="!sound"
        @click="openSoundControl"
        style="margin: 0 10px"
        size="2.8x"
        class="speaker"
      />
    </transition>

    <Nuxt />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import soundcontrol from '@/components/soundcontrol'

import { SpeakerIcon } from 'vue-feather-icons'
export default {
  components: {
    soundcontrol,
    SpeakerIcon,
  },
  computed: {
    ...mapGetters({
      sound: 'soundControl',
    }),
  },
  methods: {
    openSoundControl() {
      this.$store.commit('SET_SOUND_CONTROL', true)
    },
  },
}
</script>
<style>
.speaker {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  background: var(--dark);
  height: 60px;
  width: 60px;
  padding: 12px;
  color: var(--light);
  border-radius: 50%;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

:root {
  --dark: #34495e;
  --light: white;
  --shadow: 0 0 10px -6px black;
  --border: 1px solid #dadada;
  --radius: 6px;
}

.slide-left-enter {
  transform: translateX(-100%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: linear 200ms;
}

/** slide-right */

.slide-right-enter {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(-100%);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: linear 200ms;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(-100%);
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: 400ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 100ms;
}
</style>
