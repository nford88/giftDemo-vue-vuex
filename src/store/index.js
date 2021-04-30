
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import actions from './offers.actions';
import mutations from './offers.mutations';
import state from './offers.state';

const offersStoreIndex = () => {
  return {
    state,
    actions,
    mutations,
  }
};

const offersStore = () => new Vuex.Store(offersStoreIndex());

export default offersStore;
