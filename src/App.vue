<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import currencyConverter from './utils/helper'
export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.fetchOffers()
  },
  data(){
    return {
    currencyConverter
    }
  },
  methods: {
    ...mapActions({ fetchOffers: 'FETCH_OFFERS'})
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px ;
}


.fade-enter-active{
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
