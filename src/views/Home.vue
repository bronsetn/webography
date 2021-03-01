<template>
  <div class="home">
    <div class="grid-container">
      <Spotify></Spotify>
      <Expandable></Expandable>
      <Shadowy></Shadowy>
      <Coffeehouse></Coffeehouse>
      <Parrallax></Parrallax>
      <Repeating></Repeating>
    </div>

  </div>
</template>

<script>
import Spotify from './examples/Spotify'
import Expandable from './examples/Expandable'
import Shadowy from './examples/Shadowy'
import Coffeehouse from './examples/Coffeehouse'
import Parrallax from './examples/Parrallax'
import Repeating from './examples/Repeating'

export default {
  name: 'Home',
  components: {
    Spotify,
    Expandable,
    Parrallax,
    Coffeehouse,
    Shadowy,
    Repeating,
  }
}
</script>
