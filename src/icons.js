import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGlobe, faCodepen, faGithub)

Vue.component('fa-icon', FontAwesomeIcon)