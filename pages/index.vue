<template>
  <div class="container">
    <transition name="slide-up" mode="out-in">
      <div v-if="!playing" class="header">
        <p>Raspberry Web Radio</p>
      </div>
      <controlpanel v-if="playing" />
    </transition>
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
          <component :is="selectedComponent" />
        </transition>
      </div>
      <div v-touch:swipe.left="selectUkw" class="swipe"></div>
    </div>
  </div>
</template>
<script>
import primary from '@/components/buttons/primary'
import internetradio from '@/components/internetradio'
import ukwradio from '@/components/ukwradio'
import controlpanel from '@/components/controlpanel'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    selectedComponent: 'internetradio',
    transitionmode: 'slide-left',
  }),
  computed: {
    ...mapGetters({
      playing: 'playing',
    }),
  },
  methods: {
    selectUkw() {
      this.transitionmode = 'slide-left'
      this.selectedComponent = 'ukwradio'
    },
    abort() {
      this.$axios.$post('/api/abort')
    },
    selectInternet() {
      this.transitionmode = 'slide-right'
      this.selectedComponent = 'internetradio'
    },
  },
  components: {
    ukwradio,
    internetradio,
    primary,
    controlpanel,
  },
}
</script>


<style lang="scss" scoped>
.container {
  min-height: 100vh;
  .header {
    background: var(--dark);
    color: var(--light);
    padding: 15px;
    font-size: 1.3em;
    box-shadow: var(--shadow);
    height: 60px;
    display: flex;
    align-items: center;
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
