import ApiService from '../services/apiService';
import ActionConstants from './actionConstants';
import MutationConstants from './mutationConstants';

const store = {
  state: {
    parts: []
  },
  mutations: {
    [MutationConstants.replaceParts] (state, parts) {
      state.parts = parts;
    }
  },
  actions: {
    [ActionConstants.subscribeToParts]({commit}) {
      ApiService.getParts().subscribe(parts => commit(MutationConstants.replaceParts, parts));
    }
  }
}

export default store;