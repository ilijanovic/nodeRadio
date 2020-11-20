<template>
  <div class="wrapper">
    <p class="sender">
      <b>Ausgewählter sender:</b>
      {{ selectedRadio.name || 'Radio auswählen' }}
    </p>
    <div class="flexcontainer">
      <div
        @click="selectedRadio = radio"
        v-ripple
        class="radio"
        v-for="radio in radios"
        :key="radio.path"
      >
        <p :class="{ selected: radio.value === selectedRadio.value }">
          {{ radio.name }}
        </p>
        <img :src="radio.path" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { RadiosInterface } from 'types'
import { radios } from '@/static/radios'
import socket from '@/plugins/socket'
export default Vue.extend({
  data(): RadiosInterface {
    return {
      radios,
      selectedRadio: {},
    }
  },
  created() {},
})
</script>

<style lang="scss" scoped>
.flexcontainer {
  display: flex;
  flex-flow: wrap;
}
.wrapper {
  .sender {
    margin: 1em 0;
  }
  .radio {
    margin: 10px;
    flex: 1;
    border: val(--border);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    padding: 10px;
    cursor: pointer;
    transition: all 300ms;
    &:active {
      box-shadow: 0 0 10px -4px black;
    }
    p {
      transition: 500ms;
      border-radius: 6px 6px 0 0;
      text-align: center;
      margin: -10px;
      margin-bottom: 10px;
      padding: 5px;
      border-bottom: 1px solid #dadada;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .selected {
    background: var(--dark);
    color: var(--light);
  }
}
</style>