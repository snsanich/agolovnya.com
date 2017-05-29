
import 'vue-awesome/icons/twitter';
import 'vue-awesome/icons/facebook';
import 'vue-awesome/icons/instagram';
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/linkedin';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/phone';
import 'vue-awesome/icons/home';

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
