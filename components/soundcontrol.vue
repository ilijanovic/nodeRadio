<template>
  <div class="sound">
    <input min="0" max="100" @input="changeVol" v-model="vol" type="range" />
    <CheckIcon @click="done" style="margin: 0 10px; color: white" size="2x" />
  </div>
</template>
<script>
import { CheckIcon } from 'vue-feather-icons'
import socket from '@/plugins/socket'
export default {
  components: {
    CheckIcon,
  },
  data() {
    return {
      vol: 50,
    }
  },
  async created() {
    let vol = await this.$axios.$get('/api/getVol')
    this.vol = vol
  },
  methods: {
    changeVol() {
      socket.emit('setVol', this.vol)
    },
    done() {
      this.$store.commit('SET_SOUND_CONTROL', false)
    },
  },
}
</script>
<style lang="scss" scoped>
.sound {
  display: flex;
  align-items: center;
  width: 85%;
  transform: translateX(-50%);
  left: 50%;
  position: fixed;
  bottom: 10px;
  background: var(--dark);
  border-radius: var(--radius);
  input {
    background: none;
    padding: 5px;
  }
  input[type='range'] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #b6b6b6;
    border-radius: 25px;
    border: 1px solid #8a8a8a;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8a8a8a;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #dadada;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #b6b6b6;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #b6b6b6;
    border-radius: 25px;
    border: 1px solid #8a8a8a;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8a8a8a;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #dadada;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #b6b6b6;
    border: 1px solid #8a8a8a;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type='range']::-ms-fill-upper {
    background: #b6b6b6;
    border: 1px solid #8a8a8a;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type='range']::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8a8a8a;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #dadada;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #b6b6b6;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #b6b6b6;
  }
}
</style>