import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import storeFactory from './state/storeFactory';

// Plugin installation
Vue.use(Vuex);

// To favor tree-shaking, we're importing rxjs operators globally here
import 'rxjs/add/operator/map';

// Main component declaration
new Vue({
  el: '#app',
  store: storeFactory(),
  render: h => h(App)
});
