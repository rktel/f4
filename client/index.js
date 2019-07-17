import Vue from 'vue';
Vue.config.productionTip = false;
import VueMeteorTracker from 'vue-meteor-tracker';   // here!
Vue.use(VueMeteorTracker);                           // here!

import App from '../imports/ui/App.vue';
import router from '../imports/api/route'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  });
});