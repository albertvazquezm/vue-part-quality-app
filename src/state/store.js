import ApiService from '../services/apiService';
import Actions from './actions';

const store = {
  state: {
    parts: []
  },
  mutations: {
    replaceParts (state, parts) {
      state.parts = parts;
    }
  },
  actions: {
    [Actions.subscribeToParts]({commit}) {
      ApiService.getParts().subscribe(parts => commit('replaceParts', parts));
    }
  }
}

export default store;