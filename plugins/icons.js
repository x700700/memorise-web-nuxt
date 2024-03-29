import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


// import {  } from '@fortawesome/free-regular-svg-icons';
import { faUserCheck, faUserTimes, faSync } from '@fortawesome/free-solid-svg-icons';


library.add(faUserCheck);
library.add(faUserTimes);
library.add(faSync);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
