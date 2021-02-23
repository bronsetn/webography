<template>
  <div>
    <Coffeehouse></Coffeehouse>
    <Parrallax></Parrallax>
  </div>
</template>

<script>
import Coffeehouse from '../examples/coffeehouse.vue'
import Parrallax from '../examples/parrallax.vue'

export default {
  name: 'Home',
  components: {
    Parrallax,
    Coffeehouse
  }
}
</script>
