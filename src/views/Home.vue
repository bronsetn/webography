<template>
  <div class="home">
    <div class="grid-container">
      <Expandable></Expandable>
      <Shadowy></Shadowy>
      <Coffeehouse></Coffeehouse>
      <Parrallax></Parrallax>
    </div>

  </div>
</template>

<script>
import Expandable from './examples/Expandable'
import Shadowy from './examples/Shadowy'
import Coffeehouse from './examples/Coffeehouse'
import Parrallax from './examples/Parrallax'

export default {
  name: 'Home',
  components: {
    Expandable,
    Parrallax,
    Coffeehouse,
    Shadowy
  }
}
</script>
