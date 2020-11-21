<template>
    <div class="player">
        <p>Spielt</p>
        <transition name="fade" mode="out-in">
            <PauseIcon key="1" @click="pauseRadio" v-if="!pause" size="2.5x" />
            <PlayIcon key="2" @click="resumeRadio" v-if="pause" size="2.5x" />
        
        </transition>
        </div>
</template>
<script>
import {PlayIcon, PauseIcon} from "vue-feather-icons"

export default {
    data(){
        return {
            pause: false,
        }
    },
    methods: {
       pauseRadio(){
            this.pause = true
            this.$axios.$post("/api/pause")
 
        },
      resumeRadio(){
            this.pause = false
           this.$axios.$post("/api/resume")
        }
    },
    components: {
        PlayIcon, PauseIcon
    }
}

</script>
<style lang="scss" scoped>
    .player {
        height: 60px;
        background: var(--dark);
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        display: flex;
        color: white;
        svg {
            color: var(--light)
        }
    }
</style>