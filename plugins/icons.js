import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCamera } from '@fortawesome/free-solid-svg-icons'


library.add(faCamera);

Vue.component('font-awesome-icon', FontAwesomeIcon);
