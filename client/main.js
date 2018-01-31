import { Meteor } from 'meteor/meteor'
import App from './App.vue';
import Vue from 'vue';
// debugger
Meteor.startup(() => {
  const app = new Vue({
    el: '#app',
    ...App,
  });

});


