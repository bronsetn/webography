<template>
  <div class="home">
    <div class="grid-container">
      <Trail></Trail>
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
import Trail from './examples/Trail'
import Spotify from './examples/Spotify'
import Expandable from './examples/Expandable'
import Shadowy from './examples/Shadowy'
import Coffeehouse from './examples/Coffeehouse'
import Parrallax from './examples/Parrallax'
import Repeating from './examples/Repeating'

export default {
  name: 'Home',
  components: {
    Trail,
    Spotify,
    Expandable,
    Parrallax,
    Coffeehouse,
    Shadowy,
    Repeating,
  }
}
</script>
