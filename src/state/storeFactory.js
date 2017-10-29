import store from './store';
import Vuex from 'vuex';

const storeFactory = () => new Vuex.Store(store);

export default storeFactory;