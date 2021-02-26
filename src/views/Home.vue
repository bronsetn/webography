<template>
  <div class="home">
    <div class="grid-container">
      <Shadowy></Shadowy>
      <Coffeehouse></Coffeehouse>
      <Parrallax></Parrallax>
    </div>

  </div>
</template>

<script>
import Shadowy from './examples/Shadowy'
import Coffeehouse from './examples/Coffeehouse'
import Parrallax from './examples/Parrallax'

export default {
  name: 'Home',
  components: {
    Parrallax,
    Coffeehouse,
    Shadowy
  }
}
</script>
