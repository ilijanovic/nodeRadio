import Ripple from 'vue-ripple-directive'
import Vue from 'vue'
Ripple.color = 'rgba(0,0,0, 0.30)'
Ripple.zIndex = 55
Vue.directive('ripple', Ripple)
