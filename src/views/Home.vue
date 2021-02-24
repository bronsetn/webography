<template>
  <div class="home">
    <div class="title">
      <h1>Webography</h1>
      <strong>CSS Typography - Examples & Inspiration</strong>
      <p><a
          href="https://github.com/bronsetn/webography"
          rel="noopener"
          target="_blank"
        >Github link</a></p>
      <p>
      </p>
    </div>

    <div class="grid-container">
      <Shadowy></Shadowy>
      <Coffeehouse></Coffeehouse>
      <Parrallax></Parrallax>
    </div>

  </div>
</template>

<script>
import Shadowy from '../examples/Shadowy'
import Coffeehouse from '../examples/Coffeehouse'
import Parrallax from '../examples/Parrallax'

export default {
  name: 'Home',
  components: {
    Parrallax,
    Coffeehouse,
    Shadowy
  }
}
</script>

<style scoped>

.title {
  margin-bottom: 15px;
}
title, h1 {
    font-size: 4em;
    padding-bottom: 5px;
}

title, p {
  padding: 2px;
}


</style>
