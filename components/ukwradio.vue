<template>
  <div class="container">
    <input @change="check" class="freq" type="number" v-model="frequenz" />
    <input
      @mouseup.stop=""
      type="range"
      v-model="frequenz"
      :min="min"
      step="0.1"
      :max="max"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    frequenz: 88.8,
    min: 87.5,
    max: 120,
  }),
  methods: {
    check() {
      if (this.frequenz > this.max) {
        this.frequenz = this.max
      }
      if (this.frequenz < this.min) {
        this.frequenz = this.min
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  input {
    width: 100%;
  }
}
.freq {
  border: none !important;
  background: var(--dark);
  color: var(--light);
  padding: 20px;
  text-align: center;
  font-size: 1.2em;
  margin: 1em 0;
}
h2 {
  color: var(--light);
  background: var(--dark);
  min-width: 120px;
  padding: 20px;
  text-align: center;
  margin: 1em auto;
}
input[type='range'] {
  height: 32px;
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
</style>