

import * as actionsType from './offers.actionsType';
import * as mutationsType from './offers.mutationsType';

import { requestProducts } from '../utils/api'

export default {
  async [actionsType.FETCH_OFFERS]({ commit }) {
    commit(mutationsType.SET_OFFERS, []);
    try {
      commit(mutationsType.SET_LOADING, true);
      commit(mutationsType.SET_OFFERS, await requestProducts());
    } catch (e) {
      // Trigger a toast
    }
    finally {
      commit(mutationsType.SET_LOADING, false);
    }
  },
};
