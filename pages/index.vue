<template>
  <div class="container">
    <div class="header">
      <p>Raspberry Web Radio</p>
    </div>
    <div class="box">
      <div v-touch:swipe.right="selectInternet" class="swipe"></div>
      <div style="flex: 1">
        <div class="mode">
          <div
            :class="{ selected: selectedComponent === 'internetradio' }"
            v-ripple
            class="modes"
            @click="selectInternet"
          >
            Internet
          </div>
          <div
            :class="{ selected: selectedComponent === 'ukwradio' }"
            v-ripple
            class="modes"
            @click="selectUkw"
          >
            UKW
          </div>
        </div>
        
        <transition :name="transitionmode" mode="out-in">
          <keep-alive>
          <component :is="selectedComponent" />
          </keep-alive>
        </transition>
      </div>
      <div v-touch:swipe.left="selectUkw" class="swipe"></div>
    </div>
    <primary @click.native="abort">Abbrechen</primary>
  </div>
</template>
<script>
import primary from "@/components/buttons/primary"
import internetradio from '@/components/internetradio'
import ukwradio from '@/components/ukwradio'
export default {
  data: () => ({
    selectedComponent: 'internetradio',
    transitionmode: 'slide-left',
  }),
  methods: {
    selectUkw() {
      this.transitionmode = 'slide-left'
      this.selectedComponent = 'ukwradio'
    },
    abort(){
      this.$axios.$post("/api/abort")
    },
    selectInternet() {
      this.transitionmode = 'slide-right'
      this.selectedComponent = 'internetradio'
    },
  },
  components: { ukwradio, internetradio, primary },
}
</script>


<style lang="scss" scoped>
.container {
  min-height: 100vh;
  overflow: hidden;
  .header {
    background: var(--dark);
    color: var(--light);
    padding: 15px;
    font-size: 1.3em;
    box-shadow: var(--shadow);
  }
  .mode {
    display: flex;
    margin: 1em auto;
    justify-content: center;
    .modes {
      cursor: pointer;
      border: 1px solid #dadada;
      padding: 20px;
      min-width: 100px;
      text-align: center;
      transition: 300ms;
      border-radius: var(--radius) 0 0 var(--radius);
      &:last-child {
        border-radius: 0 var(--radius) var(--radius) 0;
      }
    }
  }
  .selected {
    background: var(--dark);
    color: var(--light);
  }
  .box {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    .swipe {
      padding: 12px;
    }
  }
}
</style>
