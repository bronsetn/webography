<template>
  <div class="home">
    <div class="grid-container">
      <Trail></Trail>
      <Expandable></Expandable>
      <Imagebackground></Imagebackground>
      <Parrallax></Parrallax>
      <Coffeehouse></Coffeehouse>
      <Shadowy></Shadowy>
      <Repeating></Repeating>
      <Spotify></Spotify>
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
import Imagebackground from './examples/Image-background'

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
    Imagebackground,
  }
}
</script>
