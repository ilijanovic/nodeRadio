<template>
  <div class="wrapper">

    <div class="flexcontainer">
      <div
        @click="selectRadio(radio)"
        v-ripple
        class="radio"
        v-for="(radio, i) in radios"
        :key="radio.path"
        :style="{opacity: radio.loaded ? 1: 0}"
        :class="{disabled: radio.value === selectedRadio.value}"
      >
        <p :class="{ selected: radio.value === selectedRadio.value }">
          {{ radio.name }}
        </p>
        <img @load="$store.commit('IMAGE_LOADED',i )" :src="radio.path" />
      </div>
    </div>
  </div>
</template>


<script>
import {mapGetters} from "vuex"
export default {

computed: {
  ...mapGetters({
    radios: "radios",
    selectedRadio: "selectedRadio"
  })
 
},
 async created(){
    let url =  await this.$axios.$get("/api/currentUrl")
   this.$store.commit("SET_RADIO_BY_URL", url)
   console.log("created")
  
  },
methods: {
  async selectRadio(radio){
    this.$store.commit("SET_RADIO", radio)
    let url = radio.streamUrl
    await this.$axios.$post("/api/stream", {
      url
    })
  }
}
}
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
    min-width: 130px;
    border: val(--border);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    padding: 10px;
    cursor: pointer;display: flex;
    flex-flow: column;
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
      margin: auto
    }
  }
  .selected {
    background: var(--dark);
    color: var(--light);
  }
}
.disabled {
  background: #ecf0f1;
  pointer-events:none
}
</style>