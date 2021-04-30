import * as mutationsType from './offers.mutationsType';

export default {
  [mutationsType.SET_LOADING]: (state, flag) => { state.loading = flag; },
  [mutationsType.SET_OFFERS]: (state, offers) => { state.items = offers; },
};
